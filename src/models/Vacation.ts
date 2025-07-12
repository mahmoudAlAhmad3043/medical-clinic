import Vacation from "../classes/Vacation";
import mongoose from "../config/db";
import { Duration, VacationType } from "../types";

const VacationSchema = new mongoose.Schema<Vacation>({
  type: {type:String} as unknown as VacationType,
  vacation_day: String,
  start_date: Date,
  duration: {type:Object} as unknown as Duration,
  description: String,
},{optimisticConcurrency: true});

const VacationModel = mongoose.model<Vacation>("vacations", VacationSchema);

export default VacationModel;
