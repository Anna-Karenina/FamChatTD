import express from 'express'
import bcrypt from "bcrypt";
import socket from "socket.io";
import { validationResult } from "express-validator";

import { UserModel } from "../models";
import { createJWTToken } from '../libz/'

class UserController{
  io: socket.Server;

  constructor(io: socket.Server){
    this.io = io;
  }
  show = (req: express.Request, res: express.Response)=> {
    const id: string = req.params.id
    UserModel.findById(id, (err, user)=>{
      if(err){
        return res.status(404).json({
          message: `Пользователь с id ${id} не найден`
        })
      }
      res.json(user)
    })
  }

  getMe = (req: any, res: express.Response) => {
    const id: string = req.user._id;
    UserModel.findById(id, (err, user)=>{
      if(err){
        return res.status(404).json({
          message: 'Вход не выполнен'
        })
      }
      res.json(user)
    })
  }
  findUsers = (req: any, res: express.Response) => {
     const query: string = req.query.query;
     UserModel.find()
       .or([
         { name: new RegExp(query, "i") },
         { email: new RegExp(query, "i") }
       ])
       .then((users: any) => res.json(users))
       .catch((err: any) => {
         return res.status(404).json({
           status: "error",
           message: err
         });
       });
   };

  delete = (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    UserModel.findOneAndRemove({ _id: id })
    .then(user => {
      if (user) {
        res.json({
          message: `Пользователь ${user.name} удален`
        });
      }
    })
    .catch(() => {
      res.json({
        message: `Пользователь ненайден`
      });
    });
  }

  create = (req: express.Request, res: express.Response) => {
    const postData = {
      email: req.body.email,
      name: req.body.newusername,
      password: req.body.regpassword
    };
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const user = new UserModel(postData);
    user
    .save()
    .then((obj: any) => {
      res.json(obj);
    })
    .catch(reason => {
      res.status(500).json({
        status: 'error',
        statusMessage: reason,
        message: 'Такой пользователь уже зарегистрирован',
        variants: 'error',
      })
    });
  }

  login = (req: express.Request, res: express.Response) => {
    const postData = {
      email: req.body.email,
      password: req.body.password,
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    UserModel.findOne({ email: postData.email }, (err, user: any) => {
      if (err || !user) {
        return res.json({
          status: 'usererror',
          message: 'Пользователь c таким логином не найден  ',
          variants: 'error',
        })
      }
      //if (bcrypt.compareSync(postData.password, user.password)) {
      if (postData.password === user.password) {
        const token = createJWTToken(user)
        res.json({
          status: 'Вход выполнен',
          token,
          variants: 'success',
        })
      } else {
        res.json({
          status: 'error',
          message: 'Не верный пользователь или пароль',
          variants: 'error',
        });
      }
    });
  };
}

export default UserController
