import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDatabase from './config/database';
import route from './routes/files'
import { v2 as cloudinary } from 'cloudinary'

dotenv.config()
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_CLOUD,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const app = express();
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use('/api/files/',route)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})