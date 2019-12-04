import mongoose, { ConnectionOptions } from 'mongoose';

const URL:string ='mongodb+srv://annakarenina:9516623438svr@cluster0-8qzna.azure.mongodb.net/'

const options:ConnectionOptions = {
  dbName: 'tasker',
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  native_parser: true
}


mongoose.connect(URL, options)
.then(() => {
    console.log('Подключение к  Atlas Cluster удалось!')

  }).catch( (err: any) => console.error(err) )

 // createBucket(optns)
