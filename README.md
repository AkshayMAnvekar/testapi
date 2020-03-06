"# testapi" 

API

Signup:
  POST  http://localhost:3000/api/auth/signup
    Body:
      {
        "email": "",
        "password": ""
      }

Login:
  POST  http://localhost:3000/api/auth/login
    Body:
      {
        "email": "",
        "password": ""
      }

  Response:
    {
      "userId": "",
      "token": ""
    }

Create:
POST http://localhost:3000/api/note/
  Header: Authorization - Bearer Token
  form-data:
    image: <file>
    title: ""
    description: ""
    userID: ""
    priveteFlag: ""

Get Notes:

POST http://localhost:3000/api/note/
  Header: Authorization - Bearer Token (Optional)
  Params:
    page
    size
    search <- this can also be part of body

  Body:
    {
      "userId": "",
      "search": "" <- Serach query 
    }
  Response:
    {
    "id": "",
    "title": "",
    "description": "",
    "privateFlag": "",
    "imageData": {
        "mimeType": "",
        "imgData": {
            "type": "Buffer",
            "data": []
        }
    }
    }