import express from 'express'
import socket from "socket.io";
import mongoose from 'mongoose'

import { TaskModel, UserModel } from '../models'

class TaskController {
  io: socket.Server;
  constructor(io: socket.Server) {
    this.io = io;
  }

  index = (req: express.Request, res: express.Response) => {
    TaskModel.find()
      .populate(["tasks", "users"])
      .populate({
        path: 'taskCreator',
          populate: { path: 'users' }
      })
      .populate({
          path: 'taskAssignee.assignee' ,
          populate: { path: 'users' }
      })
      .exec((err, tasks) =>{
        if (err) {
          return res.status(404).json({
            message: "Messages not found"
          });
        } 
        return res.json(tasks);
      });
  };

  archiveindex = (_req: express.Request, res: express.Response) => {
    mongoose.model('ArchiveTask').find()
      .populate(["tasks", "users"])
      .populate({
        path: 'taskCreator',
          populate: { path: 'users' }
      })
      .populate({
        path: 'taskAssignee.assignee' ,
        populate: { path: 'users' }
    })
      .exec((err, tasks)=> {
        if (err) {
          return res.status(404).json({
            message: "Tasks not found"
          });
        }
        return res.json(tasks);
      });
  };

  indexmytasks = (req: express.Request, res: express.Response) => {
    const userId:string | number = req.user._id;
      TaskModel
      .find({'taskAssignee':{
        assignee: userId,
        'assigneeStatus.isNew': false,
        'assigneeStatus.status': 'inProgress' 
      } 
    })
      .populate(["taskAssignee.assignee", "users"])
      .populate({
        path: 'taskCreator',
          populate: { path: 'users' }
      })
      .exec((err, tasks)=>{
        if (err) {
          return res.status(404).json({
            message: 'Tasks not found',
          });
        }
        return res.json(tasks);
      });
  };

  indexmynewtasks = (req: express.Request, res: express.Response) => {
    const userId:string | number = req.user._id;
      TaskModel.find({'taskAssignee':{
        assignee: userId,
        'assigneeStatus.isNew': true
      } 
    })
      .populate(["taskAssignee.assignee", "users"])
      .populate({
        path: 'taskCreator',
          populate: { path: 'users' }
      })
      .exec((err, tasks)=>{
        if (err) {
          return res.status(404).json({
            message: 'Tasks not found',
          });
        }
        return res.json(tasks);
      });
  };
  indexmycomplitetasks = (req: express.Request, res: express.Response) => {
    const userId:string | number = req.user._id;
      TaskModel.find({'taskAssignee':{
        assignee: userId,
        'assigneeStatus.isNew': false,
        'assigneeStatus.status': "Complite",

      } 
    })
      .populate(["taskAssignee.assignee", "users"])
      .populate({
        path: 'taskCreator',
          populate: { path: 'users' }
      })
      .exec((err, tasks)=>{
        if (err) {
          return res.status(404).json({
            message: 'Tasks not found',
          });
        }
        return res.json(tasks);
      });
  };

  create = async (req: any, res: express.Response) => {
    const userId = req.user._id;

    const allusers = await UserModel.find({})
      .then(result=>{ return result.map(i => {
        return {assignee : i._id} 
      })
     })
    const postData =  {
     taskName: req.body.payload.taskName,
     taskAssignee: req.body.payload.toAll ? allusers
     :  await req.body.payload.taskAssignee.map((i:any) => {
        return {assignee : i._id} 
      }) ,
     datepickerinline: req.body.payload.datepickerinline,
     taskDiscription: req.body.payload.taskDiscription,
     taskPriority: req.body.payload.priority,
     taskCreator: userId,
     taskStatus:{
      team:
       req.body.payload.taskAssignee.length > 1 || req.body.payload.toAll  ? true : false
     }
    };  
    const task = new TaskModel(postData);
  task
    .save()
      .then((obj: any) => {
        res.json({
          status: 'success',
          variants: 'success',
          message: `Таска ${obj.taskName} создана` ,
        });
      }).catch(reason => {
          res.status(500).json({
            status: 'error',
            statusMessage: reason,
            message: 'Произошла ошибка',
            variants: 'error',
          })
      });
  }

  taketasktoprogress = async (req: express.Request, res: express.Response) => {
    const userId = req.user._id;
    const taskid = req.query.taskid
    const filter = {
      _id: taskid,
     'taskAssignee.assignee': userId,
     'taskAssignee.assigneeStatus.isNew': true
    }
    let doc =  await TaskModel.findOne(filter)

    let fildoc =  doc?.taskAssignee.filter(i=>i.assignee.toString() === userId)
    fildoc?.map((i:any)=>{
      return (
        i.assigneeStatus.isNew = false,
        i.assigneeStatus.status = 'inProgress'
      )
    })
    doc?.save()
    .then((doc)=>{
      return res.json(doc);
    }).catch(reason => {
      res.status(500).json({
        status: 'error',
        statusMessage: reason,
        message: 'Произошла ошибка',
        variants: 'error',
      })
   })
  }

  taketasktocomplite = async (req: express.Request, res: express.Response) => {
    const userId = req.user._id;
    const taskid = req.query.taskid
    const filter = {
      _id: taskid,
     'taskAssignee.assignee': userId,
     'taskAssignee.assigneeStatus.status': 'inProgress'
    }
    let doc =  await TaskModel.findOne(filter)
    let fildoc =  doc?.taskAssignee.filter(i=>i.assignee.toString() === userId)
    fildoc?.map((i:any)=>{
      return (
        i.assigneeStatus.status = 'Complite'
      )
    })
    doc?.save()
    .then((doc)=>{
      return res.json(doc);
    }).catch(reason => {
      res.status(500).json({
        status: 'error',
        statusMessage: reason,
        message: 'Произошла ошибка',
        variants: 'error',
      })
   }) 
  }



  toarchive = (req: express.Request, res: express.Response) => {
    const taksId: string = req.query.id;
      TaskModel.findOneAndUpdate({ _id: taksId},
        { $set :{ taskStatus:{ archive: true } }},{new: true}, (_err, result:any) => {  
        let Archtask = new (mongoose.model('ArchiveTask'))(result)
        Archtask._id = mongoose.Types.ObjectId()
        Archtask.isNew = true
        result.remove()
        Archtask.save().then(()=>{
          res.status(200).json({
            status: 'success',
            variants: 'success',
            message: 'Таска Перемещенна в Архив'
          });
      })
    })
  }

  deletetask = (req: express.Request, res: express.Response) => {
    const taksId: string = req.query.id;
     TaskModel.findByIdAndRemove(taksId, (err, task ) => {
        if (err || !task) {
          return res.status(404).json({
            status: 'error',
            variants: 'error',
            message: 'Какие-то проблемы'
          })
        } else {
          res.json({
            status: 'info',
            variants: 'info ',
            message: 'Таска успешно  Удаленна'
           })
        }
      })  
  }
  
}
export default TaskController
