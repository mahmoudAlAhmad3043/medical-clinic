import jwt from 'jsonwebtoken'
import Admin from './classes/Admin'
import bcrypt from 'bcrypt'
import { Request } from 'express'
import { env }  from './env'
import nodemailer from 'nodemailer'

export const getAuthAdminToken = (admin:Admin,secret:string) => {
  try{
    return {token:jwt.sign({username:admin.username,device_ip:admin.device_ip},secret,{ expiresIn: '1h' }) , status:true}
  }  catch {
    return {token:null,msg:'Getting token error',status:false}
  }
}

export const verifyAuthAdminToken = (token:string,secret:string): jwt.JwtPayload => {
  try{
    return {decoded:jwt.verify(token,secret) as jwt.JwtPayload,status:true};
  } catch {
    return {decoded:null,msg:'Verification token error',status:false}
  }
}

export const comparePassword = async (password:string,hashedPassord:string) : Promise<Boolean> => {
    const isMatch = await bcrypt.compare(password, hashedPassord)
        if (isMatch) {
          return  true
        } else {
          return  false
        }
}

export const getHeaderToken = (req:Request) => {
  let token = ''
  if(req.headers.authorization){
    token =  req.headers.authorization.split(' ')[1] 
  }
  return token
}

export const sendVerificationEmail = (token:string,email:string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: env.EMAIL_USER,
      pass: env.EMAIL_PASS
    }
  });
  const url = `http://${env.IP}:${env.PORT}/verify/${token}`;
  const mailOptions = {
    from: env.EMAIL_USER,
    to: email,
    subject: "Email Verification",
    html: `<h3>Click to verify your email:</h3><a href="${url}">${url}</a>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.error("Email error:", error);
    else console.log("Email sent:", info.response , ' pls check your spam email.');
  });
}

export const getClientIp = (req: Request) => {
  let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
  if (Array.isArray(ip)) {
    ip = ip[0];
  }
  if (ip) {
    ip = ip.split(',')[0].trim();
    if (ip.startsWith('::ffff:')) {
      ip = ip.replace('::ffff:', '');
    }
  }
 return ip
}