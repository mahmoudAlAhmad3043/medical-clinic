import { Request, Response } from "express";
import UserService from "../classes/UserService";
import {env} from '../env'
import { comparePassword, verifyAuthAdminToken, sendVerificationEmail } from "../utils";

class Admin {
  static async signUp(req: Request, res: Response): Promise<void> {
    UserService.setAdmin(req.body).then((data)=>{
      if(!data) {
        res.status(404).json({
          success: false,
          status: 404,
          message: "Admin already exists",
        });
      } else {
        sendVerificationEmail(res.locals.token,req.body.email)
        res.status(201).json({
          success: true,
          status: 201,
          message: "Registerd successfully",
          data: '',
        });
      }
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
    const token = res.locals.token
    UserService.getAdmin(user.username,user.device_ip).then(async (data)=>{
      if(!data) {
        res.status(404).json({
          success: false,
          status: 404,
          message: "username or password incorrect",
        });
      } else {
        if(await comparePassword(user.password,data.password)) {
          res.setHeader('authorization', `Bearer ${token}`)
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
    const data = verifyAuthAdminToken(req.params.token,env.SECRET_KEY)
    if(!data.status) {
      res.status(404).json({
        success: false,
        status: 404,
        message: "No data",
      });
    }
    UserService.verify(data.decoded.username).then((data)=>{
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
              data: '',
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

  static async deleteAdmin(req: Request, res: Response): Promise<void> {
    let data = res.locals.authData
    UserService.deleteAdmin(data.decoded.username,data.decoded.device_ip).then(data=>{
      if(!data.deletedCount){
        res.status(404).json({
          success: false,
          status: 404,
          message: "Delete failed",
        });
      } else {
        res.status(200).json({
          success: true,
          status: 200,
          message: "delete success",
          data: '',
        });
      }
    }).catch((err) => {
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
