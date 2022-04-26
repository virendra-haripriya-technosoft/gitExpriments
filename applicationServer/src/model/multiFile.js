var mongoose=require('mongoose')

var uploadFiles=mongoose.Schema({
    title:{
        type:String,
        require:true,
        trim:true
    },

    filesCollection:[Object],
},{timestamps:true})

module.exports=mongoose.model('MultiFile',uploadFiles)
