from flask import Flask, jsonify, request
import json
from common import app, db
import models
from passlib.hash import sha256_crypt

def encode(password):
    return sha256_crypt.hash(password)

@app.route('/users/', methods=['GET', 'POST'])
def users_endpoint():
    users = models.User.query.all()
    data = [user.to_dict() for user in users]
    response = jsonify({'users': data})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
        
@app.route('/signin', methods=['POST'])
def signin():
    data = request.get_json()
    user = data['username']
    userObject = models.User.query.filter_by(username=user).first()
    statusCode = 0
    if userObject is None:
        statusCode = 1
    else: 
        password = data['password']
        status = sha256_crypt.verify(password, userObject.password_hash)
        if not status:
            statusCode = 2

    response = jsonify({'code': statusCode})
    return response

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    statusCode = 1
    user = data['username']
    userObject = models.User.query.filter_by(username=user).first()
    if userObject is None:
        newuser = models.User(username=user, password_hash=encode(data['password']))
        db.session.add(newuser)
        db.session.commit()
        statusCode = 0
    response = jsonify({'code': statusCode})
    return response


@app.route('/chats/<user1>/<user2>')
def get_chats(user1, user2):
    chats = list(filter(lambda chat: chat.user1 == user1 and chat.user2 == user2, models.Chat.query.all()))
    if len(chats)==0:
        chats = list(filter(lambda chat: chat.user2 == user1 and chat.user1 == user2, models.Chat.query.all()))

    chats = [chat.to_dict() for chat in chats]
    response = jsonify({'chats': chats})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/updatechat/<user1>/<user2>', methods=['POST'])
def update_chat(user1, user2):
    net_chats = models.Chat.query.all()
    chat_a = list(filter(lambda chat: chat.user1 == user1 and chat.user2 == user2, net_chats))
    chat_b = list(filter(lambda chat: chat.user1 == user2 and chat.user2 == user1, net_chats))
    data = request.get_json()

    if len(chat_a)>0:
        chat = chat_a[0]
        chat_list = json.loads(chat.chat)
        chat_list.append(data)
        out = json.dumps(chat_list)
        chat.chat = out
        db.session.commit()
        print (chat_a[0].chat)

    elif len(chat_b) > 0:
        chat = chat_b[0]
        chat_list = json.loads(chat.chat)
        chat_list.append(data)
        out = json.dumps(chat_list)
        chat.chat = out
        db.session.commit()
        print (chat_b[0].chat)
    
    else:
        chat_list = []
        chat_list.append(data)
        out = json.dumps(chat_list)
        chat = models.Chat(user1=user1, user2 = user2, chat=out)
        db.session.add(chat)
        print(chat_list)
        db.session.commit()

    response = jsonify({'success': True})
    return response

    

if __name__ == "__main__":
    app.run(debug=True)
