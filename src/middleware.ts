import { NextFunction, Request, Response } from "express";
import { getAdmin } from "./models/Admin";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { env }  from './env'


export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const admin = req.body;
  if (typeof admin === "object" && admin.password && admin.first_name && admin.device_ip) {
    next();
  } else{
    res.status(403).json({
        success: false,
        status: 403,
        message: "Access denied. Admin only.",
      });
  }
};

export const hasAdmin = (req: Request, res: Response, next: NextFunction) => {
  getAdmin()
    .then((admin) => {
      if (!admin.length) {
        next();
      } else {
        res.status(403).json({
          success: false,
          status: 403,
          message: "Access denied. Admin already exists.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        status: 500,
        message: "Something went wrong",
        data: [],
        error: err,
      });
    });
};

export const hashPassword = async (req: Request, res: Response, next: NextFunction) => {
  const admin = req.body
  const password = admin.password
  await bcrypt.hash(password,10).then((hashPassword)=>{
    req.body.password = hashPassword
    next()
  }).catch((err)=>{
    res.status(500).json({
      success: false,
      status: 500,
      message: "Something went wrong",
      data: [],
      error: err,
    });
  })
}

export const getAuthToken = (req: Request, res: Response, next: NextFunction) => {
  const secret = env.SECRET_KEY
  const admin =  req.body  
  const token = jwt.sign({first_name:admin.first_name,device_ip:admin.device_ip},secret)
  res.setHeader('authorization', `Bearer ${token}`)
  next()
}
