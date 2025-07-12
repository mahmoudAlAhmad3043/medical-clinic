import mongoose from "../config/db";
import Service from "../classes/Service";
import { Duration } from "../types";

const ServiceSchema = new mongoose.Schema<Service>({
  type: String,
  description: String,
  duration: {type:Object} as unknown as Duration
},{optimisticConcurrency: true});

const ServiceModel = mongoose.model<Service>("services",ServiceSchema)


export default ServiceModel
