import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt'
import { env }  from './env'
import { getAuthAdminTokenSignUp,getAuthAdminTokenLogin, getClientIp, getHeaderToken, verifyAuthAdminToken } from "./utils";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const admin = req.body;
  if (admin.role === 'Admin') {
    next();
  } else{
    res.status(403).json({
        success: false,
        status: 403,
        message: "Access denied. Admin only.",
      });
  }
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

export const hashNewPassword = async (req: Request, res: Response, next: NextFunction) => {
  const data = verifyAuthAdminToken(req.params.token,env.SECRET_KEY)
  if(data.status && data.decoded) {
    const password = data.decoded.password
    const username = data.decoded.username
    await bcrypt.hash(password,10).then((hashPassword)=>{
    res.locals.password = hashPassword
    res.locals.username = username
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
  } else {
    res.status(401).json({
        success: false,
        status: 401,
        message: "Something went wrong",
        data: [],
        error: 'error',
      });
  }
}

export const getAuthToken = (req: Request, res: Response, next: NextFunction) => {
  const data = getAuthAdminTokenLogin(req.body,env.SECRET_KEY)
  if(data.status) {
    res.locals.token = data.token
    next()
  }else  {
    res.status(500).json({
      success: false,
      status: 500,
      message: "Something went wrong",
      data: [],
      error: data.msg,
    });
  }
}

export const VerificationCode = (req: Request, res: Response, next: NextFunction) => {
  req.body.isVerified = false
  const data = getAuthAdminTokenSignUp(req.body,env.SECRET_KEY)
if(data.status) {
    res.locals.token = data.token
    next()
  }else  {
    res.status(500).json({
      success: false,
      status: 500,
      message: "Something went wrong",
      data: [],
      error: data.msg,
    });
  }
}

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  let token = getHeaderToken(req)
  let data = verifyAuthAdminToken(token,env.SECRET_KEY)
  if(data.status && data.decoded) {
      res.locals.authData = data
      next()
  }else {
        res.status(401).json({
        success: false,
        status: 401,
        message: data.msg,
      });
    }
}

export const setClientIP = (req: Request, res: Response, next: NextFunction) => {
 req.body.device_ip = getClientIp(req)
 next()
}