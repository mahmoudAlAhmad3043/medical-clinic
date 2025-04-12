import { NextFunction, Request, Response } from "express";
import { getAdmin } from "./models/Admin";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { env }  from './env'
import nodemailer from 'nodemailer'
import { getAuthAdminToken } from "./utils";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const admin = req.body;
  if (typeof admin === "object" && admin.password && admin.username && admin.device_ip) {
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
  const token = getAuthAdminToken(req.body,env.SECRET_KEY)
  req.body.token = token
  next()
}

export const sendVerificationEmail = (req: Request, res: Response, next: NextFunction) => {
  const admin =  req.body
  admin.isVerified = false
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: env.EMAIL_USER,
      pass: env.EMAIL_PASS
    }
  });
  const token = getAuthAdminToken(req.body,env.SECRET_KEY)
  const url = `http://${env.IP}:${env.PORT}/verify/${token}`;
  console.log(admin.email)
  const mailOptions = {
    from: env.EMAIL_USER,
    to: admin.email,
    subject: "Email Verification",
    html: `<h3>Click to verify your email:</h3><a href="${url}">${url}</a>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.error("Email error:", error);
    else console.log("Email sent:", info.response);
  });
  next()
}
