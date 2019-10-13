import mongoose , {Schema, Document} from 'mongoose'
import { isEmail } from 'validator'
import differenceInMinutes from "date-fns/differenceInMinutes"
import { generatePasswordHash } from "../libz";

export interface IUser extends Document {
  name: string;
  email: string;
  avatar?: string;
  password: string;
  lastSeen: Date;
  confirmed: boolean;
  confirm_hash?: string;
  hierarchy: number;

}

const UserSchema = new Schema (
  {
    name: {
      type: String,
      required: 'Обязателен для ввода',
    },
    email: {
      type: String,
      required: 'Обязателен для ввода',
      validate: [isEmail, 'Формат почты указан не верно'],
      unique: true
    },
    avatar: String,
    password: {
      type:String,
      required: 'Обязателен для ввода',
    },
    lastSeen: {
      type:Date,
      default: new Date()
    },
    confirmed:{
      type: Boolean,
      default: false
    },
    confirm_hash: String,
    hierarchy:{
      type: Number,
      default: 1
    },
  },
  {
    timestamps: true
  },
)

UserSchema.virtual('isOnline').get(function(this: any) {
  const now = new Date()
  return differenceInMinutes(now, this.last_seen) < 5;
});

UserSchema.set("toJSON", {
  virtuals: true
});

  UserSchema.pre('save', async function(next) {
    const user: any = this;

    if (!user.isModified('password')) {
      return next();
    }

    user.password = await generatePasswordHash(user.password);
    user.confirm_hash = await generatePasswordHash(new Date().toString());
  });

const UserModel = mongoose.model<IUser>("User" , UserSchema )

export default  UserModel
