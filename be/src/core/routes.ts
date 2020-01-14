import bodyParser from 'body-parser'
import express from 'express'
import socket from 'socket.io'
import { updateLastSeen, checkAuth } from "../middleware";
import { loginValidation } from "../libz/validations";
import methodOverride from 'method-override';

const misc = require ('./storage')


import { UserCtr,
 DialogCtr,
 MessageCtr,
 TaskCtr,
 UploadingCtr
 } from "../controllers";

const  createRoutes = async (
  app: express.Application,
  io: socket.Server ) => {
    const DialogController = new DialogCtr(io);
    const UserController = new UserCtr(io);
    const MessageController = new MessageCtr(io);
    const TaskController = new TaskCtr(io);
    const UploadingController = new UploadingCtr(io);

    app.use(bodyParser.json())
    app.use(checkAuth)
    app.use(updateLastSeen)
    app.use(methodOverride('_method'));

    app.get('/user/me', UserController.getMe)
    app.get("/user/verify", UserController.verify);
    app.post('/user/login', loginValidation, UserController.login)
    app.post('/user/registration', UserController.create)
    app.get("/user/allUsers", UserController.finAllUsers)
    app.get('/user', UserController.show)
    app.post('/user', UserController.update)
    app.post('/user/avatarupload', misc.upload.single('file'), UserController.updateava)
    app.delete('/user/:id', UserController.deleteUser)

    app.get('/dialogs', DialogController.index)
    app.post('/dialogs', DialogController.create)
    app.delete('/dialogs/:id', DialogController.deleteDialog)

    app.get('/messages', MessageController.index)
    app.post('/messages', MessageController.create)
    app.delete('/messages', MessageController.delete)

    app.get('/tasks/getall', TaskController.index )
    app.get('/tasks/getallarchive', TaskController.archiveindex )
    app.get('/tasks/getmytasks', TaskController.indexmytasks )
    app.get('/tasks/getnewtasks', TaskController.indexmynewtasks )
    app.get('/tasks/getcomplitetasks', TaskController.indexmycomplitetasks )
    app.post('/tasks', TaskController.create )
    app.post('/tasks/taketasktoprogress', TaskController.taketasktoprogress )
    app.post('/tasks/taketasktocomplite', TaskController.taketasktocomplite )
    app.post('/tasks/toarchivetask/', TaskController.toarchive )
    app.delete('/tasks/deleteTask/', TaskController.deletetask )

    app.post('/upload', misc.upload.single('file'), UploadingController.upload)
}
export default createRoutes
