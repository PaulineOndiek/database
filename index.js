const express=require("express")
const mongoose=require ("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const app=express()
const port=process.env.PORT || 8000
app.listen(port, ()=>{
    console.log(`This server is running on port: ${port}`)
})
mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("The database is connected"))
    .catch((err)=>console.log(err))


app.get("/", (req,res)=>{
    res.send("Database Project")
})
