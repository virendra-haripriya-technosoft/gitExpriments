const Purches = require('../model/purchase')

exports.addPurches=function (req,res){
    var {  invoiceNumber, invoiceDate, custmerInfo,productDetails,CGST,SGST,IGST,
        CGSTValue,IGSTValue,SGSTValue,textableValue,invoiceValue,sellerInfo,invoiceType}=req.body

    var date=new Date(invoiceDate)  // i am find month for chart
    var invoiceCreateMonth=date.getMonth()+1
    var purches=new Purches({
        invoiceNumber, invoiceDate, custmerInfo,productDetails,CGST,SGST,IGST,
        CGSTValue,IGSTValue,SGSTValue,textableValue,invoiceValue,sellerInfo,invoiceType,invoiceCreateMonth
    })


    purches.save(function (err,invoice){
        if(!err) res.send(invoice)
        else res.send(err)
    })

}
exports.getPurches=function (req,res){
    Purches.find(function (err,invoice){
        if(!err) res.send(invoice)

        else res.send(err)
    })
}
exports.getOnePurchase=function (req,res){
    d1= req.params.id
    Purches.findById(d1,function (err,invoice){
        if(!err) res.send(invoice)

        else res.send(err)
    })
}
exports.deletePurches=function (req,res){
    Purches.deleteMany(function (err,invoice){
        if(!err) res.send(invoice)
        else res.send(err)
    })
}
exports.deleteOnePurchase=function (req,res){
    var data= req.params.id
    Purches.findByIdAndDelete(data,function (err,invoice){
        if(!err) res.send(invoice)

        else res.send(err)
    })
}
exports.updatePurches=function (req,res){
    var id=req.body._id
    var purchaseData=req.body
    var id1=delete purchaseData['_id']
    Purches.findByIdAndUpdate(id,purchaseData,function (err,purchaseData) {
        if(!err) res.send({'purchase invoice  are updated':purchaseData})
        else     res.send({error:err})
    })
}
exports.SearchPurches= function(req,res) {
    const userInfo = req.params.query
    Purches.find({$text: {$search: userInfo}},function (err,data){
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