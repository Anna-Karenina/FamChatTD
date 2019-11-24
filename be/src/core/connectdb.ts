import GridFsStorage from 'multer-gridfs-storage';
import multer from 'multer';
import crypto from 'crypto';
import path from 'path';
import Grid from 'gridfs-stream';
import mongoose from 'mongoose';

const URL ='mongodb+srv://annakarenina:9516623438svr@cluster0-8qzna.azure.mongodb.net/'

const options = {
  dbName: 'tasker',
  retryWrites: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  native_parser: true
}


mongoose.connect(URL, options)
.then(() => {
    console.log('Подключение к  Atlas Cluster удалось!')
    let gfs = Grid(mongoose.connection.db, mongoose.mongo);
    gfs.collection('uploads');
    module.exports.gfs = gfs;
  }).catch( (err: any) => console.error(err) )

  const storage = new GridFsStorage({
    db: mongoose.connection,
    file: (_req: any, file: { originalname: any; }) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err:any, buf:any) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload:any = multer({ storage });
module.exports.upload = upload

const GFSSchema = new mongoose.Schema({ name: String,  });
// GFSSchema.virtual('chunks', {
//   ref: 'chunks',
//   localField: '_id',
//   foreignField: 'files_id',
//   base64: 'any'
// });
const GFS = mongoose.model('GFS', GFSSchema, "uploads.files");
// const ChunksSchema = new mongoose.Schema({ files_id: mongoose.ObjectId, data: Buffer });
// const chunks = mongoose.model('chunks', ChunksSchema, 'uploads.chunks');

  storage.on('connectionFailed', (err) => {
    console.log(err)
  });
