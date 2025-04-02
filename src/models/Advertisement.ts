import Advertisement from "../classes/Advertisement";
import mongoose from "../config/db";


const AdvertisementSchema = new mongoose.Schema<Advertisement>({
    description:String,
    path_image:String
})


const AdvertisementModel  = mongoose.model<Advertisement>('advertisements',AdvertisementSchema)


export default AdvertisementModel