import 'dotenv/config.js'
import './src/config/db.js'

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRouter from "./src/routes/index.router.js";
import { notFoundHandler } from './src/middlewares/notFoundHandler.middleware.js';
import { errorHandler } from './src/middlewares/errorHandler.middleware.js';


const PORT = process.env.PORT || 8000;
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())


app.use('/api', indexRouter)


app.use(notFoundHandler)
app.use(errorHandler)



app.listen(PORT, () => console.log('Server running on port: ' + PORT));