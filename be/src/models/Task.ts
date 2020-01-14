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
    complete:{
      type: boolean;
      require: boolean;
      default: false;
    },
    archive:{
      type: boolean;
      require: boolean;
      default: false;
    },
  },
  taskAssignee:[{
    _id: boolean;
    assignee:{
      type: Schema.Types.ObjectId;
      ref: string;
    },
    assigneeStatus:{
      isNew:{
        type: boolean;
        require: boolean;
        default: boolean;
      },
      status:{
        type: string;
        require: boolean;
        default: string;
      }
    }
  }],
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
    taskAssignee:[{
      _id:false,
      assignee:{type: Schema.Types.ObjectId, ref: 'User'},
      assigneeStatus:{
        isNew:{type:Boolean, require: true, default: true } ,
        status:{type:String, require: true, default: "openNew"  }
      }
     }],
    datepickerinline:{type: Date},
    taskStatus:{
      team:{
        type: Boolean,
        require: true,
        default: false,
      },
      complete:{
        type: Boolean,
        require: true,
        default: false,
      },
      archive:{
        type: Boolean,
        require: true,
        default: false,
      },
    },
    },
  {
    timestamps: true
  }
);
const TaskModel = mongoose.model<ITask>("Task", TaskSchema);
const ArchiveTaskModel = mongoose.model<ITask>("ArchiveTask", TaskSchema);

export default TaskModel;

//status: openNew , inProgress , readyPendingReview ,returnedForCorrection, completed&close, deadlineEnded
