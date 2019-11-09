import express from 'express'
import socket from "socket.io";

import {  TaskModel } from '../models'

class TaskController {
  io: socket.Server;
  constructor(io: socket.Server) {
    this.io = io;
  }


  index = (req: express.Request, res: express.Response) => {
    const taksId: string = req.query.tasks;

    TaskModel.find()
      .populate(["tasks", "users"])
      .populate({
        path: 'taskCreator',
          populate: { path: 'users' }
      })
      .populate({
          path: 'taskAssignee' ,select: 'name'
      })
      .exec(function(err, messages) {
        if (err) {
          return res.status(404).json({
            message: "Messages not found"
          });
        }
        return res.json(messages);
      });
  };
getteamtasks = (req: express.Request, res: express.Response) => {}

  create = (req: any, res: express.Response)=>{
      const userId = req.user._id;
      const postData = {
        taskName: req.body.payload.taskName,
        taskAssignee: req.body.payload.taskAssignee,
        datepickerinline: req.body.payload.datepickerinline,
        taskDiscription: req.body.payload.taskDiscription,
        taskPriority: req.body.payload.priority,
        taskCreator: userId,
        taskStatus:{
              team: req.body.payload.taskAssignee.length >1 ? true : false
          }
      };
    const task = new TaskModel(postData);

  task
    .save()
      .then((obj: any) => {
        res.json({
          status: 'success',
          message: 'Таска создана'
        });
      }).catch(reason => {
              res.status(500).json({
                status: 'error',
                statusMessage: reason,
                message: 'такая Таска уже есть',
                variants: 'error',
              })
            });
  }
}
export default TaskController
