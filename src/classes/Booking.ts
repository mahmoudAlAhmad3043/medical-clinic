import mongoose from 'mongoose'
import {Status} from '../types'
import {Time} from '../types'

class Booking {
    date:Date
    time:Time
    patient_id:mongoose.Schema.Types.ObjectId
    service_id:mongoose.Schema.Types.ObjectId
    booking_code:string
    status:Status
  
    constructor(date:Date,time:Time,patient_id:mongoose.Schema.Types.ObjectId,service_id:mongoose.Schema.Types.ObjectId,booking_code:string,status:Status){
      this.date = date;
      this.time = time;
      this.patient_id = patient_id;
      this.service_id = service_id;
      this.booking_code = booking_code;
      this.status = status
    }
  }
  
  export default Booking
  
  