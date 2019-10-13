import express  from 'express'
import dotenv from 'dotenv'
import { createServer } from "http"

import "./core/connectdb";
import createRoutes from './core/routes'
import createSockets from './core/socket'

const app = express()
const http = createServer(app)
const io = createSockets(http)

dotenv.config()

createRoutes(app, io)


http.listen(process.env.PORT,  () => {
  console.log(`Приложение стартовало : http://localhost:${process.env.PORT}`)
});
