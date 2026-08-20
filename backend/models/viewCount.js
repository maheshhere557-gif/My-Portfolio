import mongoose from "mongoose";

const Schema=new mongoose.Schema({ViewCount:{type:Number,default:0}},{collection:"ViewCount"})
 const Count=mongoose.model("Count",Schema)
export default Count
