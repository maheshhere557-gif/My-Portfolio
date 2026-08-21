import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import "dotenv/config"
import Count from "./models/viewCount.js"

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL,{dbName:"portfolio_View_count"}).then(()=>console.log("Connected to db")).catch((e)=>{console.log("Error:",e)})

app.get("/api/viewCount",async(req,res)=>{
    try{
  const counted=await Count.findOneAndUpdate({},{$inc:{ViewCount:1}},{new:true,upsert:true})
        res.status(200).json({message:"Success",Views:counted.ViewCount})
}catch(error){
    console.log(error)
    res.status(500).json({message:"failed",error})
}
})

app.get("/api/showCount",async(req,res)=>{
    try{
  const counted=await Count.findOne({})
        res.status(200).json({message:"Success",Views:counted})
}catch(error){
    console.log(error)
    res.status(404).json({message:"failed",error})
}
})

app.post("/api/emailjs",async(req,res)=>{
    try{
        const {name,email,description}= req.body
        res.status(200).json({message:"success",result:name})
    }catch(e){
        res.status(500).json({message:"failed",result:e})

    }
})

app.listen(5000,()=>console.log("Running on Port :5000"))