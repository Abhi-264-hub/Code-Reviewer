const express=require("express");
const aiRoutes=require("./routes/ai.route")
const cors=require("cors")

const app=express()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello World')

})

app.use("/ai",aiRoutes)
module.exports=app
