var Employee = require('../model/admin')
exports.loginWithGoogle1=function (req,res){
    var userEmail=[]
    Employee.find().select('contact').exec((err,data)=>{
        if(!err){
            data.map(iter=>{
                iter.contact.map(iter1=>{
                    //console.log(iter1.email)
                    userEmail.push(iter1.email)
                })
            })
            res.send(userEmail)
        }
        else res.send(err)
    })
}