const Customer = require('../model/customer')
exports.addcustomerdata=(req,res)=> {
    var costomer = new Customer({
        customerName: req.body.customerName,
        customerGST: req.body.customerGST,
        contact: req.body.contact,
        bankDetails: req.body.bankDetails,
        customerAddress: req.body.customerAddress,
    })
    costomer.save(function (err,data){
        if(!err){
            res.send(data)
        }else {
            res.send({statusmsg:'page not found',
                statusCode:404,
                language:'eng'})
        }
    })
}
exports.deleteCustomer=function (req,res){
    Customer.deleteMany(function (err,data){
        if(!err){
            res.send({statusCode:200,msg:'delete whole customer data',language:'Eng'})
        }else {
            res.send(err)
        }
    })
}
exports.getCustomer=function (req,res){
    Customer.find(function (err,data){
        if(!err){
            res.send(data)
        }else {
            res.send(err)
        }
    })
}
exports.getCustomerById=function (req,res){
    var _id=req.params.id
    Customer.findById(_id,function (err,data){
        if(!err){
            res.send({statusCode:200,msg:'this is single Customer data',language:'Eng',data})
        }else{
            res.send(err)
        }
    })
}
exports.deleteCustomerById=function (req,res){
    var id=req.params.id
    Customer.findByIdAndDelete(id,function (err,data){
        if(!err){
            res.send({statusCode:200,msg:'delete single customer data',language:'Eng',data})
        }else {
            res.send(data)
        }
    })
}
exports.updateCustomer=function (req,res) {
    var id=req.params.id
    var CustData=req.body
    var id1=delete CustData['_id']
    Customer.findByIdAndUpdate(id,CustData,function (err,updateCust) {
        if(!err) res.send({'Data are updated':updateCust})
        else     res.send({error:err})
    })
}
exports.searchCustomer= function(req,res) {
    const userInfo = req.params.query
    Customer.find({$text: {$search: userInfo}},function (err,data){
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

