import express from "express";
import socket from "socket.io";
import {generateBase64} from "../libz";
import { MessageModel, DialogModel } from "../models";

class MessageController {
  io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }

  updateReadedStatus = (res: express.Response, userId: string, dialogId: string) => {
    MessageModel.updateMany(
      { dialog: dialogId, user: { $ne: userId } },
      { $set: { readed: true } },
      (err: any) => {
        if (err) {
          return res.status(500).json({
            status: 'error',
            message: err,
          });
        }
        this.io.emit('SERVER:MESSAGES_READED', {
          userId,
          dialogId,
        });
      },
    );
  };

  index = async (req: express.Request, res: express.Response) => {
    console.log(req.query)
   const dialogId: string = req.query.dialog;
   const userId: any = req.user._id;
    this.updateReadedStatus(res, userId, dialogId);
    // //_________________pagination_____start

    // const page :number = parseInt(req.query.page)
    // const limit :number = parseInt(req.query.limit)
    
    // const startIndex= (page - 1)*limit
    // const endIndex  =  page * limit

    // const results:any={}

    // const a = await MessageModel.find({ dialog: dialogId }).countDocuments().exec()

    // if(endIndex <  a){
    // results.next  = {
    //   page:page + 1,
    //   limit: limit
    // }
    // }
    // if(startIndex > 0 ){
    //   results.previous = {
    //     page:page - 1,
    //     limit: limit
    //   }
    // }
    // //_________________pagination______end


    await MessageModel.find({ dialog: dialogId })
     .populate(["dialog", "user" ,'files'])
    //  .skip(endIndex)
    //  .limit(limit)
     .exec()
     .then( async  docs => {
      const messages = docs.map( async doc => {
        return {
          readed: doc.readed,
          files:  doc.files.length !== 0 ?
            await new Promise((resolve, reject) => {
              doc.files.map( async (i:any) =>  {
              resolve ( generateBase64(i._id) )
                // reject( res.status(204).json({
                //   status:'error',
                //   message: 'Что-то пошло не так'
                // })
                // )
//// TODO: мультизагрузку файлов
          })
        }).then((result: any)  => { return [result] } )
          : {},
          _id: doc._id,
          text: doc.text,
          dialog: doc.dialog,
          user: doc.user,
          createdAt: doc.createdAt,
          updatedAt: doc.updatedAt,
        };
      })
    Promise.all(messages)
      .finally(() => console.log("Промис завершён"))
      .then( messages =>res.status(200).json({messages}) )
        .catch(console.log.bind(console))
    })
  };

  create = (req: any, res: express.Response) => {
    const userId = req.user._id;
    const postData = {
      text: req.body.text,
      dialog: req.body.dialog_id,
      user: userId,
      files:
        req.body.files === undefined ? []
        : req.body.files.map((i: { file: any; })=> i.file)

    };

    const message = new MessageModel(postData);
    message
      .save()
      .then((obj: any) => {
        obj.populate(["dialog", "user", 'files'],
          (err: any, message: any) => {
          if (err) {
            return res.status(500).json({
              status: "error",
              message: err
            });
          }

          DialogModel.findOneAndUpdate(
            { _id: postData.dialog },
            { lastMessage: message._id },
            { upsert: true },
            function(err) {
              if (err) {
                return res.status(500).json({
                  status: "error",
                  message: err
                });
              }
            }
          );
          res.json(message);
          this.io.emit("SERVER:NEW_MESSAGE", message);
        });
      })
      .catch(reason => {
        res.json(reason);
      });
  };

  delete = (req: express.Request, res: express.Response) => {
   const id: string = req.query.id;
   const userId: string = req.user._id;
   MessageModel.findById(id, (err, message: any) => {
     if (err || !message) {
       return res.status(404).json({
         status: 'error',
         message: 'Сообщение не найдено',
       });
     }
     if (message.user.toString() === userId) {
       const dialogId = message.dialog;
       message.remove();

       MessageModel.findOne(
         { dialog: dialogId },
         {},
         { sort: { created_at: -1 } },
         (err, lastMessage) => {
           if (err) {
             res.status(500).json({
               status: 'error',
               message: err,
             });
           }
           DialogModel.findById(dialogId, (err, dialog: any) => {
             if (err) {
               res.status(500).json({
                 status: 'error',
                 message: err,
               });
             }
             dialog.lastMessage = lastMessage;
             dialog.save();
           });
         },
       );
       return res.json({
         status: 'success',
         message: 'Сообщение удалено',
       });
     } else {
       return res.status(403).json({
         status: 'error',
         message: 'Not have permission',
       });
     }
   });
 };
}

export default MessageController;
