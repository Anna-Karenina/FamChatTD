import multer,{StorageEngine} from 'multer';
import mongoose from 'mongoose'
const { createModel , createBucket } = require('mongoose-gridfs');

const createStorage = () => {

  const storage: StorageEngine = createBucket({
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
