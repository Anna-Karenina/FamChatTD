// import mongoose, { Schema, Document } from "mongoose";
//
// export interface IUploadings extends Document {
//   length: number;
//   chunkSize: number;
//   uploadDate: Date;
//   md5: string;
//   filename: string;
//   contentType: string;
//   aliases: string;
//   metadata: any;
//   ext: string;
//   file: BinaryType;
//   read: String;
// }
//
//  const UploadingsSchema = new Schema(
//    {
//       filename: String,
//       contentType: String,
//       length: Number,
//       chunkSize: Number,
//       uploadDate: Date,
//       aliases: Object,
//       metadata: Object,
//       md5: String,
//       read: String
//     //dialog: { type: Schema.Types.ObjectId, ref: "Dialog", require: true },
//     //user: { type: Schema.Types.ObjectId, ref: "User", require: true }
//   },
// );
// //
// const UploadingsModel = mongoose.model<IUploadings>(
//   "uploads",
//   UploadingsSchema
// );
//
// export default UploadingsModel;
