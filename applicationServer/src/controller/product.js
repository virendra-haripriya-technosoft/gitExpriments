var mongoose=require('mongoose')
var Product = require('../model/product')
exports.addProduct=(req,res)=> {
         var ProductName=req.body
          Product.create(ProductName,function (err,data){
         if(!err){
            res.send(data)
        }else {
            res.send(err)
        }
    })
}
exports.getProduct=(req,res)=>{
    Product.find((err,products)=>{
        if (!err){
            res.send(products)
        }else{
            res.send(err)
        }
    })
}

exports.getProductid=function (req,res){
    var _id = req.params.id
    Product.findById(_id, function (err, data) {
        if(!err){
            res.send(data)
        }else {
            res.send(err)
        }
    })
}

exports.productdelete=(req,res)=>{
    Product.deleteMany(function (err,data){
        if(!err){
            res.send(data)
        }else{
            res.send(err)
        }
    })
}
exports.productdeletebyId=(req,res)=>{
    var _id = req.params.id;
    Product.findByIdAndDelete(_id,function (err,data){
        if(!err){
            res.send(data)
        }else {
            res.send(err)
        }
    })
}
exports.updateProduct=function (req,res) {
    var id=req.params.id
    var ProductData=req.body
    var id1=delete ProductData['id']
    Product.findByIdAndUpdate(id,ProductData,function (err,updateProduct) {
        if(!err) res.send({'Data are updated':updateProduct})
        else     res.send({error:err})
    })
}

exports.searchProduct= function(req,res) {
    const userInfo = req.params.query
    Product.find({$text: {$search: userInfo}},function (err,data){
        if (!err) {
            res.send({
                Status: "Success",
                language: "eng",
                data: data
            })
        } else {
            res.send({
                Status: "Success",
                language: "eng",
                data: null,
                error: err,
            })

        }
    })

}

