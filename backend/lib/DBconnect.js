import mongoose from "mongoose"



export const DBconnect=async()=>{
       
    await mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Database Connected !!");
        
    }).catch((err)=>{
            throw new Error(`${err}`)
    })
}