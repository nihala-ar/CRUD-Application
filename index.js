const express = require("express")
const app = express()
const userRoute = require("./routes/userRoute")

const cors = require('cors')

const connectDB = require("./config/db")
connectDB()

app.use(express.json())

app.use(cors())

app.use('/', userRoute)

app.get("/tes",(req,res)=>{
    res.json("Running")
})

app.listen(5000,console.log("server is running"))