import mongoose from 'mongoose'
const URL ='mongodb+srv://annakarenina:9516623438@cluster0-8qzna.azure.mongodb.net/'


mongoose.set('useUnifiedTopology', true)
const options = {
  dbName: 'tasker',
  retryWrites: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}

mongoose.connect(URL, options )
  .then( () => {
    console.log('Подключение к  Atlas Cluster удалось!')
  }).catch( (err) => console.error(err) )
