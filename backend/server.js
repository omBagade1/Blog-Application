import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.get("/",(req,res)=>{
   res.json("hello") 
})

app.listen(process.env.PORT||8000 ,(error)=>{
   if(error){
      console.error(error)
   }
   else{
   console.log("Server is listening !!") 
   }
})
