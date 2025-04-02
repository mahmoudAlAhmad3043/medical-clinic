import Booking from "../classes/Booking";
import mongoose from "../config/db";
import { Status } from "../types";




const BookingSchema = new mongoose.Schema<Booking>({
    date:Date,
    time:String,
    patient_id:{type:mongoose.Schema.Types.ObjectId, ref:'patients'},
    service_id:{type:mongoose.Schema.Types.ObjectId, ref:'services'},
    booking_code:String,
    status:{type:String} as unknown as Status,
})

const BookingModel = mongoose.model<Booking>('bookings',BookingSchema)

export default BookingModel