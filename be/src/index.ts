import express  from   'express'
import dotenv from 'dotenv'
import { createServer } from "http"
import mongoose from 'mongoose'
import "./core/connectdb";
mongoose.Promise = global.Promise

import createRoutes from './core/routes'
import createSockets from './core/socket'
import createStorage from './core/storage';

const app = express()
const http = createServer(app)
dotenv.config()

http.listen(process.env.PORT,  () => {
  console.log(`Приложение стартовало : http://localhost:${process.env.PORT}`)
});

mongoose.connection.on('open', () => {
  createStorage()
  const io = createSockets(http)
  createRoutes(app, io)
})
mongoose.connection.on('close', function () {
    console.log(new Date() + ' @ MongoDB: Connection Closed');
    console.log('Манго упал !! ');
});
