var Transport = require('../model/transport')
exports.Addtransport =function (req,res){
    var tranport = new Transport(
        {
        transitName:req.body.transitName,
        transitFee:req.body.transitFee,
        vehicleDeatails:req.body.vehicleDeatails,
        transitInsurance:req.body.transitInsurance,
        transitRelible:req.body.transitRelible,
        transitCoverArea:req.body.transitCoverArea,
        transitService:req.body.transitService,
        driverDetails:req.body.driverDetails,
            licenceinfo:req.body.licenceinfo,
        bankDetails:req.body.bankDetails,
        transitToAddress:req.body.transitToAddress,
    }
    )
    tranport.save(function (err,data){
        if(!err){
            res.send(data)
        }else res.send(err)
    })
}
exports.getTransport=(req,res)=>{
    Transport.find(function (err,data){
        if(!err){
            res.send(data)
        }else
            res.send(err)
    })
}
exports.deleteTransport=(req,res)=>{
    Transport.deleteMany(function (err,transport){
        if(!err){
            res.send(transport)
        }else {
            res.send(err)
        }
    })
}
exports.updtTransport=function (req,res){
    var data = req.params.id
    var data1 = req.body
    Transport.findByIdAndUpdate(data,data1,function (err,data){
        if(!err){
            res.send(data)
        }else {
            res.send(err)
        }
    })
}
exports.getTransportById=function(req,res){
    var id=req.params.id
    Transport.findById(id,function (err,data){
        if(!err){
            res.send(data)
        }else{
            res.send(err)
        }
    })
}
exports.deleteTransportById=function (req,res){
    var id= req.params.id
    Transport.findByIdAndDelete(id,function (err,data){
        if(!err){
            res.send('data is delete')
        }else {
            res.send(err)
        }
    })
}

exports.searchTransport= function(req,res) {
    const userInfo = req.params.query
    Transport.find({$text: {$search: userInfo}},function (err,data){
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

