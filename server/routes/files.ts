import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary'
import FileModel from '../models/File';
import https from 'https';
import nodemailer from 'nodemailer';
import createEmailTemplate from '../utils/createEmailTemplate';

const router = express.Router();

const storage = multer.diskStorage({})

let upload = multer({
  storage
})

router.post("/upload", upload.single('someFile'), async (req,res) => {
  try {
    if (!req.file) { return res.status(400).json({ message: 'File not found.'}) }
    let uploadedFile;
    try {
      uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: 'FilesToGo',
        resource_type: 'auto',
      })
    } catch (error: any) {
      console.log(error.error)
      return res.status(400).json({message: "Cloudinary Error."})
    }

    const {originalname} = req.file;
    const {secure_url, bytes, format} = uploadedFile;

    const file = await FileModel.create({
      filename: originalname,
      sizeInBytes: bytes,
      secureUrl: secure_url,
      format
    })
    
    res.status(200).json({
      id: file._id,
      downloadPageLink: `${process.env.API_BASE_ENDPOINT_CLIENT}download/${file._id}`,
    });

  } catch (error: any) {
    console.log(error.error);
    res.status(500).json({message: 'Server error.'})
  }
})

router.get("/:id", async (req,res) => {
  try {
    const id = req.params.id
    const file = await FileModel.findById(id)
    if (!file) {
      return res.status(404).json({message: "File doesn't exist."})
    }
    const {filename, sizeInBytes, format} = file
    return res.status(200).json({
      name: filename,
      sizeInBytes,
      format,
      id,
    })
  } catch (error) {
    return res.status(500).json({message: "Server error."})
  }
})

router.get("/:id/download", async (req,res) => {
  try {
    const id = req.params.id
    const file = await FileModel.findById(id)
    if (!file) {
      return res.status(404).json({message: "File doesn't exist."})
    }
    https.get(file.secureUrl, (fileStream) => fileStream.pipe(res))
    
  } catch (error) {
    return res.status(500).json({message: "Server error."})
  }
})

router.post('/email', async (req,res) => {
  const {id, emailFrom, emailTo} = req.body;
  if (!id || !emailFrom || !emailTo) {
    return res.status(400).json({message: "Invalid data."})
  }

  const file = await FileModel.findById(id)
  if (!file) {
    return res.status(404).json({message: "File doesn't exist."})
  }

  let transporter = nodemailer.createTransport({
    // @ts-ignore
    host: process.env.SENDINBLUE_SMTP_HOST,
    port: process.env.SENDINBLUE_SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SENDINBLUE_SMTP_LOGIN,
      pass: process.env.SENDINBLUE_SMTP_PASSWORD,
    },
  });

  const {filename, sizeInBytes} = file;
  const fileSize = `${(Number(sizeInBytes) / (1024 * 1024)).toFixed(2)} MB`;
  const downloadPageLink = `${process.env.API_BASE_ENDPOINT_CLIENT}download/${id}`

  const mailOptions = {
    from: emailFrom,
    to: emailTo,
    subject: "File shared with you.",
    text: `${emailFrom} shared a file with you.`,
    html: createEmailTemplate(emailFrom,downloadPageLink,filename,fileSize),
  }

  let info = await transporter.sendMail(mailOptions, async (error, info) => {
    if (error) {
      console.log(error)
      return res.status(500).json({message: 'Server error.'})
    }
    file.sender = emailFrom
    file.receiver = emailTo

    await file.save;
    return res.status(200).json({message: "Email sent."})
  })

})

export default router;