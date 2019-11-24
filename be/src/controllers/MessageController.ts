import express from "express";
import socket from "socket.io";
import { MessageModel, DialogModel } from "../models";
const misc = require('./../core/connectdb')


const fileStream:any =  async (fileidarr: any) =>{
console.log(fileidarr)
  return new Promise((resolve, reject) => {
    const readstream = misc.gfs.createReadStream({
      _id: fileidarr.toString,
    })
    const bufs:any  = [];
    readstream.on('data',  (chunk: any) => {
      bufs.push(chunk);
    });
    readstream.on('error', reject)
    readstream.on('end', () => resolve(
      Buffer.concat(bufs).toString('base64')))
  })
}

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

   index =  (req: any, res: express.Response) => {

    const dialogId: string = req.query.dialog;
    const userId: any = req.user._id;
    this.updateReadedStatus(res, userId, dialogId);
//let  messages:any
//console.log(mongoose.connection)
     MessageModel.find({ dialog: dialogId })
      .populate(["dialog", "user" ,'files'])
      .exec()
      .then(  async docs => {
      //res.status(200).json({
     const messages = docs.map( async (doc) => {
if(doc.files.length !==0 ){
  await fileStream(doc.files.map((i: { _id: any; })=>i._id))
    .then((result: any) => {return doc.files.base64 = result})
}
            return {
              readed: doc.readed,
              files:doc.files.base64,
              _id: doc._id,
              text: doc.text,
              dialog: doc.dialog,
              user: doc.user,
              createdAt: doc.createdAt,
              updatedAt: doc.updatedAt,
            };
          //})
      })
  await  Promise.all(messages).then(messages=>res.status(200).json({messages}))
    })
  };


  create = (req: any, res: express.Response) => {
    const userId = req.user._id;
    const postData = {
      text: req.body.text,
      dialog: req.body.dialog_id,
      files:
        req.body.files === undefined ? []
        : req.body.files.map((i: { file: any; })=> i.file) ,
      user: userId
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
         message: 'Message not found',
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
         message: 'Message deleted',
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
