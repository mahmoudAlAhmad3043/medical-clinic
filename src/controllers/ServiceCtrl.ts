import { Request, Response } from "express";
import Admin from "../classes/Admin";

class Service {
  static async addService(req: Request, res: Response): Promise<void> {
    Admin.addService(req.body).then((data)=>{
      if(!data) {
        res.status(404).json({
          success: false,
          status: 404,
          message: "Add service field",
        });
      } else {
        res.status(201).json({
          success: true,
          status: 201,
          message: "Add service success",
          data: data
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
  static async updateService(req: Request, res: Response): Promise<void> {
    Admin.updateService(req.body).then(async (data)=> {
      if(!data) {
        res.status(404).json({
          success: false,
          status: 404,
          message: "Update service field",
        });
      } else {
          res.status(200).json({
                success: true,
                status: 200,
                message: "Update service success",
                data: data
          })
        }
    }).catch(err => {
      res.status(500).json({
        success: false,
        status: 500,
        message: "Something went wrong",
        data: [],
        error: err,
      })
    })
  }

  static async deleteService(req: Request, res: Response): Promise<void> {
    Admin.deleteService(req.body.service_id).then(data => {
      if(!data.deletedCount) {
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

export default Service;
