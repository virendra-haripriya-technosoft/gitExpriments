var mongoose=require('mongoose')
var expense = new mongoose.Schema({
    expenseName:{
        type:String,
        trim:true
    },
    paymentDate:{
        type:String,
        //default:Date.now()
    },
    amount:{
        type:String,
        trim:true
    },
    paymentMode:{
        type:String,
        enum:['cash','check','bank','online payment']
    },
    expenseBy:{
        type:String,
        trim:true
    }
})
expense.index({expenseName:'text',paymentDate:'text',amount:'text',paymentMode:'text',expenseBy:'text'})
var Expense=new mongoose.model('Expense',expense)
module.exports=Expense

