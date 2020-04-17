## Ionic Angular Chat Application

This is a chat application developed using Angular and Ionic with Flask being used as the backend
The backend is separate and interacts with the front end using JSON. I will host the backend on PythonAnywhere.
Right now sockets have not been used as they are not supported on the hosting platform, PythonAnywhere.
The front end is built using Ionic and Angular and thus the same source code can be used for Android, iOS and Web.

The final compiled web version will be demoed on Github Pages. The compiled javascript is found in the /www folder with index.html serving as the entrypoint

The backend code is stored in chat-backend.

### Building

To build the front end, you need to have Ionic 4 and Angular installed. No other dependencies have been installed.

```
ionic build --prod
```

This will build the front end in the www folder. If you have capacitor/cordova installed you can use the same to generate the android apk.
To run the final front end you will need to use a simple web server. You can use python's built in server as follows:
```
cd www
python -m http.server
```

To run the backend locally, 
```
cd chat-backend
pip install -r requirements.txt
flask db migrate
flask db upgrade
python app.py
```

Note that you will need to link your backend and front end. To do so modify the environment.ts file in the environments folder and set URL to your localhost url. This is currently set to the online version available on PythonAnywhere.

API_URL on PythonAnywhere: https://geekpradd.pythonanywhere.com