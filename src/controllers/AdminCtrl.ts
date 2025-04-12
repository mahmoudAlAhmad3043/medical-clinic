import { Request, Response } from "express";
import AdminClass from "../classes/Admin";
import { signUp, getAdmin,verify,logIn } from "../models/Admin";
import moment from "moment";
import {env} from '../env'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { comparePassword, verifyAuthAdminToken } from "../utils";

class Admin {
  static async signUp(req: Request, res: Response): Promise<void> {
    signUp(req.body).then((data)=>{
      res.status(201).json({
        success: true,
        status: 201,
        message: "Registerd successfully",
        data: '',
      });
    }).catch(err=>{
      res.json({
        success: false,
        status: 500,
        message: "Something went wrong",
        data: [],
        error: err,
      });
    });
  }
  static async logIn(req: Request, res: Response): Promise<void> {
    const user = req.body
    logIn(user.username,user.device_ip).then(async (data)=>{
      if(!data) {
        res.status(404).json({
          success: false,
          status: 404,
          message: "username or password incorrect",
        });
      } else {
        const hashedPassword = data.password
        if(await comparePassword(user.password,hashedPassword)) {
          res.setHeader('authorization', `Bearer ${user.token}`)
          res.status(200).json({
                success: true,
                status: 200,
                message: "Login account successfully",
                data: ''
          })
        } else {
          res.status(404).json({
            success: false,
            status: 404,
            message: "username or password incorrect",
          });
        }
      }
    }).catch(err=> {
      res.status(500).json({
        success: false,
        status: 500,
        message: "Something went wrong",
        data: [],
        error: err,
      })
    })
  }
  static async verify(req: Request, res: Response): Promise<void> {
    const user = verifyAuthAdminToken(req.params.token,env.SECRET_KEY)
    verify(user.username).then((data)=>{
      if(!data){
        res.status(404).json({
          success: false,
          status: 404,
          message: "No data",
        });
      }else {
        res.status(200).json({
          success: true,
              status: 200,
              message: "Verified account successfully",
              data: data,
        })
      }
    }).catch(err=>{
      res.status(500).json({
        success: false,
        status: 500,
        message: "Something went wrong",
        data: [],
        error: err,
      })
    })
  }
  static async getAdmin(req: Request, res: Response): Promise<void> {
    getAdmin()
      .then((data) => {
        if (!data.length) {
          res.status(404).json({
            success: false,
            status: 404,
            message: "No data",
          });
        } else {
            res.status(200).json({
            success: true,
            status: 200,
            message: "Admins retrieved successfully",
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          success: false,
          status: 500,
          message: "Something went wrong",
          data: [],
          error: err,
        });
      });
  }
}

export default Admin;
