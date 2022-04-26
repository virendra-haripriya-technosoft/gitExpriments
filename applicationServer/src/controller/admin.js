const Admin= require('../model/admin')
exports.addAdmin=function (req,res){
    var {
        firstName,
        lastName,
        age,
        contact,
        empInfo,
        bankDetails,
        address
    }=req.body
    var admin =new Admin({
        firstName,
        lastName,
        age,
        contact,
        empInfo,
        bankDetails,
        address,
        role:'admin'
    })

    Admin.create(req.body,function (err,data) {
        if(!err){
            res.json({
                statusCode:201,
                msg:'data inserted successfully',
                data})
        }else {
            console.log(err)
            res.send(err)
        }
    })
 /*
    admin.save(function (data,err) {
        if(!err){
            res.json({
                statusCode:201,
                msg:'data inserted successfully',
                data})
        }else {
            res.send(err)
        }
    })

  */
}
exports.getAdmin=function (req,res){
    Admin.find(function (err,data){
        if(!err){
            res.send(data)
            console.log(data)
        }else{
            res.send({msg:'data not get'})
        }
    })
}
exports.deleteAdmin=function (req,res){
    console.log('hello')
    Admin.deleteMany(function (err,data){
        if(!err){
            res.send(data)
        }else {
            res.send(err)
        }
    })
}

exports.deleteAdminById=function (req,res){
    var id=req.params.id
    Admin.findByIdAndDelete(id,function (err,data){
        if(!err){
            res.send(data)
        }else {
            res.send(err)
        }
    })
}
exports.getAdminById=function (req,res){
    var _id=req.params.id
    Admin.findById(_id,function (err,data){
        if(!err){
            res.send({statusCode:201,msg:'this is single Admin data',language:'Eng',data})
        }else{
            res.send(err)
        }
    })
}
/*
exports.updateAdmin=function (req,res) {
    var id=req.body._id
    var EmplData=req.body
    console.log(id)
    console.log(EmplData)
    var id1=delete EmplData['_id']
    //console.log(id1)
    Admin.findByIdAndUpdate(id,EmplData,function (err,updateEmplo) {
        if(!err) res.json({'Data are updated':updateEmplo})
       else     res.json({error:err})

    })
}
 */
exports.updateAdmindata=function (req,res) {
    var id=req.params.id
    var admData=req.body
    Admin.findByIdAndUpdate(id,admData,function (err,updateadmin) {
       if(!err){
           res.send(updateadmin)
       }else {
           res.send(err)
       }
    })
}
exports.searchAdmin= function(req,res) {
    const userInfo = req.params.query
    Admin.find({$text: {$search: userInfo}},function (err,data){
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
