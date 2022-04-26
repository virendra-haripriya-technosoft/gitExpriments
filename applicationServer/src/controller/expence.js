var Expense = require('../model/expences')
exports.addExpense=function(req,res){
    const expense = new Expense({
        expenseName:req.body.expenseName,
        paymentDate:req.body.paymentDate,
        amount:req.body.amount,
        paymentMode:req.body.paymentMode,
        expenseBy:req.body.expenseBy,
    })
    expense.save(function (err,data){
        if(!err){
            res.send(data)
        }else {
            res.send(err)
        }
    })
}

exports.deleteExpense=function (req,res){
    Expense.deleteMany(function (err,data){
        if(!err){
            res.send({ statusCode:201,
                language: 'eng',
                msg: 'data delete successfully',
                data})

        }else {
            res.send(err)
        }
    })
}
exports.deleteExpenseById=function (req,res){
    var id=req.params.id
    Expense.findByIdAndDelete(id,function (err,data){
        if(!err){
            res.send(data)
        }else
           res.send(err)

    })
}
exports.getExpenseById=function (req,res){
    var id = req.params.id
    Expense.findById(id,function (err,data){
        if(!err){
            res.send(data)
        }else
            res.send(err)
    })
}
exports.updateExpense=function (req,res){
    var exp = req.params.id
    var exp1 =req.body
    Expense.findByIdAndUpdate(exp,exp1,function (err,data){
        if(!err)
            res.send(data)
        else res.send(err)
    })
}


exports.getExpense=function (req,res){
    Expense.find(function (err,data){
        if(!err){
            res.send(data)

        }else res.send(err)
    })
}


exports.getPages=function(req,res) {
    const {page = 1 ,size=10} = req.query
    const Page= (parseInt(page))
    const  Size = parseInt(size)
    Expense.find(function (err,data){
        if(!err){
            const TotalData=data.length
            Expense.find()
                .limit(Size)
                .skip((page - 1) * size)
                .exec((err,data)=>{
                  //  console.log(data)
                    if(!err){
                        length=data.length
                        res.status(200).send({
                            TotalData,
                            TotalPages:Math.ceil(TotalData/Size),
                            Page,
                            Size:length,
                            Expense:data
                        })
                    }else {
                        res.send({
                            Status: "Success",
                            data: null,
                            error: err,
                            language: "en"
                        })
                    }
                })
        }else res.send(err)
    })
}

exports.textSearch= function(req,res) {
    const userInfo = req.params.query
    Expense.find({$text: {$search: userInfo}},function (err,data) {
        if(!err){
            res.send({
                Status: "Success",
                language: "en",
                data: data,

            })
        }else {
            res.send({
                Status: "Success",
                data: null,
                error: err,
                language: "en"
            })
        }
    })
}


