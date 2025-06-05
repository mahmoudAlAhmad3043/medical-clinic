import {Duration} from "../types"
import ServiceModel from "../models/Service"
import { ObjectId } from "mongoose"

class Service {
  _id?:ObjectId
  type:String
  description:String
  duration:Duration


  constructor(_id:ObjectId,type:String,description:String,duration:Duration) {
    this._id = _id
    this.type = type;
    this.description = description;
    this.duration = duration;
  }
}

export default Service