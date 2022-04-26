var mongoose=require('mongoose')
var static=require('../model/staticData')
var StaticData=new mongoose.model('StaticData',static)


exports.addStaticContentInvoice=function (req,res) {
    var {sellerName,GSTSeller,mobileSeller,emailSeller,streetAddSeller,citySeller,tehSeller,distSeller,
        pinSeller,stateSeller,stateCodeSeller,countrySeller,bankName,branchName,AccountNum,id,
        ifsCode,panNum,aadharNum}=req.body

    var staic= new StaticData({
        sellerName,GSTSeller,mobileSeller,emailSeller,streetAddSeller,citySeller,tehSeller,distSeller,
        pinSeller,stateSeller,stateCodeSeller,countrySeller,bankName,branchName,AccountNum,
        ifsCode,panNum,aadharNum,id
    })

    staic.save(function (err,data) {
        if(err) res.send(err)
        else res.send(data)
    })
}

exports.getStaticContentInvoice=function (req,res) {
    StaticData.find(function (err,data) {
        if(err) res.send(err)
        else res.send(data)
    })
}

exports.deleteStaticContentInvoice=function (req,res) {
    StaticData.deleteMany(function (err,data) {
        if(!err) res.send(data)
        else res.send(err)
    })
}

exports.updateStaticContentInvoice=function (req,res) {
    var id=req.params.id
    var static=req.body
    var id1=delete static['_id']
    StaticData.findByIdAndUpdate(id,static,function (err,data) {
        if(!err) res.send(data)
        else res.send(err)
    })
}
exports.getStaticDataById=function (req,res){
    var id = req.params.id
    StaticData.findById(id,function (err,data){
        if(!err){
            res.send(data)
        }else res.send(err)
    })
}

exports.getStaticContentInvoice1=function (req,res,next){
    StaticData.findOne({id:1},function (err,data){
        if(err) res.send(err)
        else {
            res.staticData=data
            next()
        }
    })

}