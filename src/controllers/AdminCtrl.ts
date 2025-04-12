import { Request, Response } from "express";
import AdminClass from "../classes/Admin";
import { signUp, getAdmin } from "../models/Admin";
import moment from "moment";

class Admin {
  static async signUp(req: Request, res: Response): Promise<void> {
    signUp(req.body).then((data)=>{
      res.status(201).json({
        success: true,
        status: 201,
        message: "Registerd successfully",
        data: data,
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
    console.log("log-in success");
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
