var express = require('express')
var env = require('dotenv')
var app = express()
env.config()
var path=require('path')
var mongoose = require('./database/connection')
var router = require('./Router/commonRouting')
var excel=require('./Router/excelRouter')
var upload=require('./Router/uploadfile')

var cors = require('cors')

//console.log(path.join(__dirname,'../../'))
 var  path1 =path.join(__dirname,'../../')
app.use(express.static(path1))
app.set('view engine','ejs')
app.use(express.json())

console.log("this is index")

app.use(cors())

app.use('/v1',router)
app.use('/v1',excel)
app.use('/v1',upload)

app.listen(process.env.PORT,()=>{
    console.log(`server listen Port Number ${process.env.PORT}`)
})