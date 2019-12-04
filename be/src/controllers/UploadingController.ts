import express from "express";
import socket from "socket.io";


class UploadingController {
    io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }

  upload = async (req:express.Request, res:express.Response) => {
     res.json({ file: req.file });
     this.io.emit('SERVER:FILE_UPLOADED', console.log('пришла картинка'));
  }


}
export default UploadingController;
