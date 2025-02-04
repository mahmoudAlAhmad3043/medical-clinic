import BookingType from './bookingType'
import Status from './status'
import Time from './time'

class Booking {
    id: number
    date:Date
    time:Time
    patient_id:number
    booking_type:BookingType
    booking_code:string
    status:Status
  
    constructor(id:number,date:Date,time:Time,patient_id:number,booking_type:BookingType,booking_code:string,status:Status){
      this.id = id;
      this.date = date;
      this.time = time;
      this.patient_id = patient_id;
      this.booking_type = booking_type;
      this.booking_code = booking_code;
      this.status = status
    }
  }
  
  export default Booking
  
  