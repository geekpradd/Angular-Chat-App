from common import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))

    def __repr__(self):
        return '<User {}>'.format(self.username)  
    def to_dict(self):
        return {"username": self.username, "id": self.id, "email": self.email}

class Chat(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user1 = db.Column(db.String(64), index=True)
    user2 = db.Column(db.String(64), index=True)
    chat = db.Column(db.String(640000), index=True)

    def __repr__(self):
        return '<Chat {0}:{1}>'.format(self.user1, self.user2)
    def to_dict(self):
        return {"user1": self.user1, "user2": self.user2, "chat": self.chat}

      