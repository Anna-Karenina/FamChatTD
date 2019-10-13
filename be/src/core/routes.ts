import bodyParser from 'body-parser'
import express from 'express'
import socket from 'socket.io'
import { updateLastSeen, checkAuth } from "../middleware";
import { loginValidation } from "../libz/validations";

import { UserCtr, DialogCtr, MessageCtr } from "../controllers";



const createRoutes =(app: express.Express, io: socket.Server ) =>{
  const UserController = new UserCtr(io);
  const DialogController = new DialogCtr(io);
  const MessageController = new MessageCtr(io);

  app.use(bodyParser.json())
  app.use(checkAuth)
  app.use(updateLastSeen)


  app.get('/user/me', UserController.getMe)
  app.post('/user/login', loginValidation, UserController.login)
  app.post('/user/registration', UserController.create)
  app.delete('/user/:id', UserController.delete)
  app.get('/user/:id', UserController.show)
  app.get("/user/allUsers", UserController.findUsers);


  app.get('/dialogs', DialogController.index)
  app.delete('/dialogs/:id', DialogController.delete)
  app.post('/dialogs', DialogController.create)

  app.get('/messages', MessageController.index)
  app.post('/messages', MessageController.create)
  app.delete('/messages/:id', MessageController.delete)
}

export default createRoutes
