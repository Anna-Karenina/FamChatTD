// import path from 'path';
// import crypto from 'crypto';
// import multer from 'multer';
// import GridFsStorage from 'multer-gridfs-storage';
//
//
//
// // Mongo URI
// const uploadURI = require('./connectdb')
//
//
// // Create storage engine
// const storage = new GridFsStorage({
//   url: uploadURI,
//   file: (req: any, file: { originalname: any; }) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err:any, buf:any) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString('hex') + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'Attach'
//         };
//         resolve(fileInfo);
//       });
//     });
//   }
// });
// const upload:any = multer({ storage });
//
//
// module.exports = upload;
