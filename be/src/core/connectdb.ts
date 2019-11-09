import mongoose from 'mongoose'
import Grid from "gridfs-stream";


const URL ='mongodb+srv://annakarenina:9516623438svr@cluster0-8qzna.azure.mongodb.net/'



mongoose.set('useUnifiedTopology', true)
const options = {
  dbName: 'tasker',
  retryWrites: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
    useUnifiedTopology: true
}


  const conn = mongoose.createConnection(URL ,options);

mongoose.connect(URL, options )
  .then( () => {
    console.log('Подключение к  Atlas Cluster удалось!')
  }).catch( (err) => console.error(err) )


  let gfs;

  conn.once("open", () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("uploads");
    console.log("Connection Successful");
  });

export default  gfs
