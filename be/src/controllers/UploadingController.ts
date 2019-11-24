// const mongoose = require('mongoose')
// const multer = require('multer')
// const storage = require('multer-gridfs-storage')
// const { createBucket } = require('mongoose-gridfs')
//
//
// const fileModel = storage({
//     db: mongoose.connection,
// });
//
// const upload = multer({
//     storage: fileModel
// }).single('file')
// const bucket = createBucket();
//
// console.log(mongoose.connection)
//
// class UploadingController {
//
// // download = (req:any, res:any) => {
// //
// //     Model.findOne({_id: req.params.fileId}, (err: any, file: { contentType: any; }) => {
// //         if (err)
// //             res.status(500).json({success: false, err})
// //         else if(!file)
// //             res.status(404).json({success: false})
// //         else {
// //
// //             let stream = Model.read(file)
// //
// //             res.set('Content-Type', file.contentType)
// //             return stream.pipe(res)
// //         }
// //     })
// // }
//
//
//   upload = function (req:any, res:any) {
//     upload(req,res, (err: any) => {
//         if (err || !req.file) {
//             res.status(500).json({success: false, err})
//             return
//         }
//
//         res.json({
//             success: true,
//             _id: req.file.id,
//             file: req.file
//         })
//     })
//   }
// }
// export default UploadingController;
// //import upload from './../core/storage'
//
// // import { UploadingModel } from "../models";
// //
// // class UploadingController {
// //
// //   upload =//( upload.single('file'),
// // (req: any, res: express.Response) => {
// //     const userId = req.user._id;
// //     console.log(req)
// //     console.log({file: req.file})
// //   const fileData = {
// //   //   length: req.file.size,
// //   //   chunkSize: req.file.chunkSize,
// //   //   uploadDate: req.file.uploadDate,
// //   //   md5: req.file.md5,
// //   // //  filename: file.originalname,
// //   //   contentType: req.file.contentType,
// //   //   aliases: String,
// //   //   metadata: String,
// //   //   ext: String,
// //      user: userId,
// //   //  dialog: dialogId
// //   };
// //     const UploadFile = new UploadingModel(fileData);
// //       UploadFile
// //         .save()
// //           .then((fileObj: any) => {
// //             res.json({
// //               status: "success",
// //               file: fileObj
// //             });
// //           })
// //           .catch((err: any) => {
// //             res.json({
// //               status: "error",
// //               message: err
// //             });
// //           });
// //       }//)
// //
// // }
// //
// // export default UploadingController;
