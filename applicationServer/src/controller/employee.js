const Employee = require('../model/Employee')
exports.addEmployee=function (req,res){
    var {
        firstName,
        lastName,
        age,
        contact,
        empInfo,
        bankDetails,
        address
    }=req.body
       var emp =new Employee({
           firstName,
           lastName,
           age,
           contact,
           empInfo,
           bankDetails,
           address,
           role:'employee'
       })
    console.log(emp)
     emp.save(function (err,data) {
         if(!err){
             res.send({
                 msg:'data inserted successfully',
                 data})
         }else {
             res.send(err)

         }
     })
}
exports.getEmployee=function (req,res){
    Employee.find(function (err,data){
        if(!err){
            res.send(data)
        }else{
            res.send({msg:'data not get'})
        }
    })
}
exports.deleteEmployee=function (req,res){
    Employee.deleteMany(function (err,data){
        if(!err){
            res.send(data)
        }else {
            res.send(err)
        }
    })
}
exports.updateEmployee=function (req,res){
    var data = req.params.id
    var data1= req.body
    Employee.findByIdAndUpdate(data,data1,function (err,data){
        if(!err){
            res.send({
                msg:'update by employee data',
                data
            })
        }else {
            res.send(err)
        }
    })
}

exports.deleteEmployeeById=function (req,res){
    var id=req.params.id
    Employee.findByIdAndDelete(id,function (err,data){
        if(!err){
            res.send({statusCode:201,msg:'delete single Employee data',language:'Eng',data})
        }else {
            res.send(data)
        }
    })
}
exports.getEmployeeById=function (req,res){
    var _id=req.params.id
    Employee.findById(_id,function (err,data){
        if(!err){
            res.send({statusCode:201,msg:'this is single Employee data',language:'Eng',data})
        }else{
            res.send(err)
        }
    })
}
exports.updateEmployee=function (req,res) {
    var id=req.params.id
    var EmplData=req.body
    var id1=delete EmplData['_id']
    Employee.findByIdAndUpdate(id,EmplData,function (err,updateEmplo) {
        if(!err) res.send({'Data are updated':updateEmplo})
        else     res.send({error:err})
    })
}

exports.searchEmployee= function(req,res) {
    const userInfo = req.params.query
    Employee.find({$text: {$search: userInfo}},function (err,data){
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


