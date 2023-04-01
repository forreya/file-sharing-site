import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary'
import FileModel from '../models/File';

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
      console.log(error.message)
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
    console.log(error.message);
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

export default router;