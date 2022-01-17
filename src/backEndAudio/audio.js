const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express()
const audioList=require("./audioList")


app.use(bodyParser.json())
app.use(cors())

app.get("/audioList",(req,res)=>{
    res.json(audioList)
})
app.listen(4040)