import express from "express";
import mongoose from 'mongoose';
const misc = require ('./../core/storage')

class UploadingController {

  upload = (misc.upload.single('file') ,
    (req: express.Request, res: express.Response) => {
        console.log(req.file)
       res.json({ file: req.file })
  });
}
export default UploadingController;
