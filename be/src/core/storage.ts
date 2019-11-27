// import mongoose from 'mongoose';
// const { createModel } = require('mongoose-gridfs');
//
// const Attachment = createModel({
//     modelName: 'AttachmentModel',
//     connection: mongoose.connection,
//     bucketName: 'Attachment'
// });
// console.log(mongoose.connection)

const { createModel , createBucket } = require('mongoose-gridfs');
const multer  = require('multer');
import mongoose from 'mongoose'

const createStorage = () => {

  const storage = createBucket({
      connection: mongoose.connection,
      bucketName: 'messages/Attachment'
  });
  const Atach = createModel({
      connection: mongoose.connection,
      bucketName: 'messages/Attachment',
      modelName: 'AttachmentModel'
  });

  const upload = multer({  storage });
  module.exports.upload = upload
  module.exports.Atach = Atach
  module.exports.storage = storage
}
export default createStorage
