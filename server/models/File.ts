
import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
  filename: {type: String, required: true},
  secureUrl: {type: String, required: true},
  format: {type: String, required: true},
  sizeInBytes: {type: String, required: true},
  sender: {type: String},
  receiver: {type: String},
}, {
  timestamps: true
})

interface IFile extends mongoose.Document {
  filename: string,
  secureUrl: string,
  format: string,
  sizeInBytes: string,
  sender?: string,
  receiver?: string,
}

const FileModel = mongoose.model<IFile>("File", fileSchema)

export default FileModel;