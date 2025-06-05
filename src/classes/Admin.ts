import { ObjectId } from "mongoose";
import ServiceModel from "../models/Service";
import { Time } from "../types";
import User from "./User";
import Service from "./Service";

class Admin extends User {
  static admin: Admin | null = null;
  open_time: Time;
  close_time: Time;

  constructor(
    _id: string,
    first_name: string,
    last_name: string,
    password: string,
    email: string,
    username: string,
    phone: string,
    device_id: string,
    isVerified: boolean,
    open_time: Time,
    close_time: Time
  ) {
    super(
      _id,
      first_name,
      last_name,
      password,
      email,
      username,
      phone,
      device_id,
      isVerified
    );
    this.open_time = open_time;
    this.close_time = close_time;
  }

  static async addService(service: Omit<Service, "_id">) {
    return await new ServiceModel(service).save();
  }

  // Delete
  static async deleteService(id: ObjectId) {
    return await ServiceModel.deleteOne({ _id: id });
  }
  // Update
  static async updateService(service: Service) {
    return await ServiceModel.updateOne(
      { _id: service._id },
      {
        type: service.type,
        description: service.description,
        duration: service.duration,
      },
      { new: true }
    );
  }
}

export default Admin;
