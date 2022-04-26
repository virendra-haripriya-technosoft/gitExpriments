var mongoose=require('mongoose')

DATABASE=process.env.DATABASE
PORT=process.env.DATA_BASE_PORT
DATA_BASE_URL=process.env.DATA_BASE_URL


var url=`${DATA_BASE_URL}${PORT}/${DATABASE}`
  //console.log(url)
mongoose.connect(url,()=>{
    console.log(`database is connected ${process.env.DATABASE}`)
})

module.exports=mongoose