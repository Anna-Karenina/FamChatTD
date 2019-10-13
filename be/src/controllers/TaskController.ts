import express from 'express'
import socket from "socket.io";

import {  MessageModel } from '../models'

class MessageController {
  io: socket.Server;

constructor(io: socket.Server) {
  this.io = io;
}

  index(req: express.Request, res: express.Response) {
    const dialogId: string = req.query.dialog
    MessageModel.find({dialog: dialogId })
      .populate(['dialog'])
      .exec(function(err, dialogs){
        if(err){
          return res.status(404).json({
            message: 'Сообщение не найдены'
          })
        }
        res.json(dialogs)
      })
  }

  create(req: any, res: express.Response) {
    const userId = 'req.user._id'
    const postData = {
      text: req.body.text,
      dialog: req.body.dialog_id,
      user: userId
    };
      const message = new MessageModel(postData);
      message
        .save()
        .then((obj: any) => {
          obj.populate("dialog", (err: any, message: any) => {
            if (err) {
              return res.status(500).json({
                message: err
              });
            }
            res.json(message);
            this.io.emit("SERVER:NEW_MESSAGE", message);
          });
        })
        .catch(reason => {
          res.json(reason);
        });
    };

    delete(req: express.Request, res: express.Response) {
       const id: string = req.params.id;
       MessageModel.findOneAndRemove({ _id: id })
         .then(message => {
           if (message) {
             res.json({
               message: `Диалог удален`
             });
           }
         })
         .catch(() => {
           res.json({
             message: `Диалог ненайден`
           });
         });
     }
}
export default MessageController
