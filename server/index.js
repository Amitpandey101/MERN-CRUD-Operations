require('dotenv').config()
const express= require("express")
const cors=require("cors")
const Routes=require("./routes/route")
const bodyParser=require("body-parser")


const app=express()
app.use(cors())
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended:true}))

const PORT=8000

const Connection=require("./database/db");
const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD

Connection(username,password);

app.use("/",Routes)


app.listen(PORT,()=>{
    console.log(`server is running successfully on port ${PORT}`)
})
