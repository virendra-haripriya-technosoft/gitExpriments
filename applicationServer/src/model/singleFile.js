var mongoose=require('mongoose')
var uploadFile=mongoose.Schema({
    fileName:{
        type:String,
        require:true,
        trim:true
    },
    filePath:{
        type:String,
        require:true,
    },
    fileType:{
        type:String,
        require:true,
    },
    fileSize: {
        type:String,
        require:true
    }
},{timestamps:true})

module.exports=mongoose.model('singleFile',uploadFile)
