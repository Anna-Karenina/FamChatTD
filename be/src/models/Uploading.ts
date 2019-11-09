import mongoose, { Schema, Document } from "mongoose";

export interface IUploading extends Document {
  filename: string;
  ext: string;
  message: string;
  user: Schema.Types.ObjectId;
}

const Uploadingchema = new Schema(
  {
    filename: String,
    size: Number,
    ext: String,
    message: { type: Schema.Types.ObjectId, ref: "Message", require: true },
    user: { type: Schema.Types.ObjectId, ref: "User", require: true }
  },
  {
    timestamps: true
  }
);

const UploadingModel = mongoose.model<IUploading>(
  "UploadFile",
  Uploadingchema
);

export default UploadingModel;
