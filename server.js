const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const app = express()

const productcatRouter = require('./Router/productcatRouter')
  
const productdetilsRouter = require('./Router/productdetilsRouter')

dotEnv.config({path: './config/config.env'})


app.use(express.json());
app.use("/productcat",productcatRouter),
app.use("/productdet",productdetilsRouter)


mongoose.connect(process.env.localurl,{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then((res)=>
{
    console.log("connected to database");
}).catch((e)=>
{
   console.error(e);
})


app.listen(8080,()=>
{
    console.log("server started");
})