const Sell = require('../model/sales')
var static=require('../model/staticData')
const mongoose = require("mongoose");
var StaticData=mongoose.model('StaticData',static)

exports.addSales=function (req,res) {
    var  textableValue=0,invoiceValue=0,CGSTValue=0,SGSTValue=0,IGSTValue=0

    var {invoiceNumber,invoiceDate, custmerInfo, productDetails,CGST,SGST,IGST} = req.body
    var date=new Date(invoiceDate)  // i am find month for chart
    var invoiceCreateMonth=date.getMonth()+1
    for(var iter=0;iter<productDetails.length;iter++){
        productDetails[iter].productAmount=productDetails[iter].productQuantity*productDetails[iter].productRate

    }

    setTimeout(()=>{
        for(var iter1=0;iter1<productDetails.length;iter1++){
            textableValue=textableValue+productDetails[iter1].productAmount

        }
        CGSTValue=textableValue*CGST/100
        SGSTValue=textableValue*SGST/100
        IGSTValue=textableValue*IGST/100
        invoiceValue=CGSTValue+textableValue+SGSTValue+IGSTValue

        StaticData.findOne({id:1},function (err,data) {
            var sell=new Sell({invoiceNumber,invoiceDate, custmerInfo, productDetails,invoiceCreateMonth,
                textableValue,invoiceValue,SGST,CGST,IGST,CGSTValue,SGSTValue,IGSTValue,sellerInfo:data})

            sell.save(function (err,data) {
                if(!err) res.send(data)
                else res.send(err)
            })
        })
    },100)

}

exports.getSale=function (req,res){
    Sell.find(function (err,invoice){
        if(!err) res.send(invoice)

        else res.send(err)
    })
}

exports.getSalebyId=function (req,res){
    d1= req.params.id
    Sell.findById(d1,function (err,invoice){
        if(!err) res.send(invoice)

        else res.send(err)
    })
}
exports.deleteSale=function (req,res){
    Sell.deleteMany(function (err,invoice){
        if(!err) res.send(invoice)
        else res.send(err)
    })
}
exports.deleteSaletById=function (req,res){
    var data= req.params.id
    Sell.findByIdAndDelete(data,function (err,invoice){
        if(!err) res.send(invoice)

        else res.send(err)
    })
}
exports.updateSale=function (req,res){
    var id=req.params.id
    var sellData=req.body
    var id1=delete sellData['id']
    Sell.findByIdAndUpdate(id,sellData,function (err,sellData) {
        if(!err) res.send(sellData)
        else    res.send(err)
    })
}
exports.SearchSales=(req,res)=>{
    const userInfo = req.params.query
    Sell.find ({$text: {$search: userInfo}},function (err,data){
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
exports.getInvoicePages=  function(req,res) {
    const {page = 1 ,size=10} = req.query
    const  Page= (parseInt(page))
    const  skip =((page - 1) * size)
    const  limit = parseInt(size)
    Sell.find(function (err,data){
        if(!err){
            TotalData=data.length
            Sell.find()
                //.select('firstName')
                .limit(limit)
                .skip(skip)
                .sort({firstName:1})
                .exec((err,data)=>{
                    if(!err){
                        length=data.length
                        res.send({
                            TotalData:TotalData,
                            TotalPages: Math.ceil(TotalData / limit),
                            Page,
                            size:length,
                            data
                        } )
                    }else {
                        res.send({
                            Status: "Success",
                            data: null,
                            error: err,
                            language: "en",
                        })
                    }
                })
        }else res.send(err)
    })
}
