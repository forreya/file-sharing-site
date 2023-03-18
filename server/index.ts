import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDatabase from './config/database';
import route from './routes/files'

dotenv.config()
connectDatabase();

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