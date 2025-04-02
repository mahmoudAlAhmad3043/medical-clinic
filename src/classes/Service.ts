import {Duration} from "../types"

class Service {
  type:String
  description:String
  duration:Duration


  constructor(type:String,description:String,duration:Duration) {
    this.type = type;
    this.description = description;
    this.duration = duration;
  }
}

export default Service