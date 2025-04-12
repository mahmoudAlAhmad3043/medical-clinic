import Advertisement from "../classes/Advertisement";
import mongoose from "../config/db";


const AdvertisementSchema = new mongoose.Schema<Advertisement>({
    description:{type:String,required:true},
    path_image:{type:String,required:false}
})


const AdvertisementModel  = mongoose.model<Advertisement>('advertisements',AdvertisementSchema)


export default AdvertisementModel