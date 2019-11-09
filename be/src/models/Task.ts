import mongoose , {Schema, Document} from 'mongoose'

export interface ITask extends Document {
    taskName:{
      type: string;
      require: true;
    },
    taskDiscription: {
      type: string;
      require: boolean;
    },
    taskCreator:{
      type: Schema.Types.ObjectId;
      ref: string;
      require: true;
    },
    taskPriority:{
      type: string;
      require: true;
    },
    taskStatus:{
      team:{
        type: boolean;
        require: boolean;
        default: false;
      },
      opennew:{
        type: boolean;
        require: boolean;
        default: true;
      },
      complete:{
        type: boolean;
        require: boolean;
        default: false;
      },
      status:{
        type: string;
        require: true;
        default: string;
      }
    },
    taskAssignee:{
      type: Schema.Types.ObjectId;
      ref: string;
    },
    datepickerinline:{
    type: Date,
    },
 }



const TaskSchema = new Schema(
  {
    taskName: { type: String, require: true },
    taskDiscription: { type: String, require: Boolean },
    taskCreator: { type: Schema.Types.ObjectId, ref: 'User', require: true },
    taskPriority: { type:String ,  require: true },
    taskAssignee:[{ type: Schema.Types.ObjectId, ref: 'User' }],
    datepickerinline:{type: Date},
    taskStatus:{
      team:{
        type: Boolean,
        require: true,
        default: false,
      },
      opennew:{
        type: Boolean,
        require: true,
        default: true,
      },
      complete:{
        type: Boolean,
        require: true,
        default: false,
      },
      status:{
        type: String,
        require: true,
        default: 'open',
      },
    },
    },
  {
    timestamps: true
  }
);
const TaskModel = mongoose.model<ITask>("Task", TaskSchema);

export default TaskModel;

//status: open,  archive, taked
