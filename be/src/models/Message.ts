import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
  _id:Schema.Types.ObjectId;
  updatedAt: Date;
  createdAt: Date;
  user: Schema.Types.ObjectId;
  text: {
    type: string;
    require: boolean;
  };
  dialog: {
    type: Schema.Types.ObjectId;
    ref: string;
    require: true;
  };
  readed: {
    type: boolean;
    default: boolean;
  };
  files:  {
    type: Schema.Types.ObjectId,
    ref: string;
    default: null;
    base64: { type:Buffer };
    map:any;
    length:any;
  };
}



const MessageSchema = new Schema(
  {
    text: { type: String, require: Boolean },
    dialog: { type: Schema.Types.ObjectId, ref: 'Dialog', require: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', require: true },
    readed: {
      type: Boolean,
      default: false,
    },
    files: [
      {
        type: Schema.Types.ObjectId,
        ref: 'AttachmentModel',
      }] ,
  },
  {
    timestamps: true,
    usePushEach: true,
  },
);

const MessageModel = mongoose.model<IMessage>('Message', MessageSchema);

export default MessageModel;
