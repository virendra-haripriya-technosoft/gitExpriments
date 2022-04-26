const Sell = require("../model/sales");

exports.chartBar4=function (req,res) {
    var invoiceValue=[],sum=0
   Sell.find({invoiceCreateMonth:1}).select('invoiceValue')
       .exec((error, result) => {
            result.map(iter=>{
               sum=iter.invoiceValue+sum
             })
           invoiceValue.push(sum)
           sum=0

           Sell.find({invoiceCreateMonth:2}).select('invoiceValue')
               .exec((error, result) => {
                   result.map(iter=>{
                       sum=iter.invoiceValue+sum
                   })
                   invoiceValue.push(sum)
                   sum=0

                   Sell.find({invoiceCreateMonth:3}).select('invoiceValue')
                       .exec((error, result) => {
                           result.map(iter=>{
                               sum=iter.invoiceValue+sum
                           })
                           invoiceValue.push(sum)
                           sum=0

                           Sell.find({invoiceCreateMonth:4}).select('invoiceValue')
                               .exec((error, result) => {
                                   result.map(iter=>{
                                       sum=iter.invoiceValue+sum
                                   })
                                   invoiceValue.push(sum)
                                   sum=0
                                   Sell.find({invoiceCreateMonth:5}).select('invoiceValue')
                                       .exec((error, result) => {
                                           result.map(iter=>{
                                               sum=iter.invoiceValue+sum
                                           })
                                           invoiceValue.push(sum)
                                           sum=0
                                           Sell.find({invoiceCreateMonth:6}).select('invoiceValue')
                                               .exec((error, result) => {
                                                   result.map(iter=>{
                                                       sum=iter.invoiceValue+sum
                                                   })
                                                   invoiceValue.push(sum)
                                                   sum=0
                                                   Sell.find({invoiceCreateMonth:7}).select('invoiceValue')
                                                       .exec((error, result) => {
                                                           result.map(iter=>{
                                                               sum=iter.invoiceValue+sum
                                                           })
                                                           invoiceValue.push(sum)
                                                           sum=0
                                                           Sell.find({invoiceCreateMonth:8}).select('invoiceValue')
                                                               .exec((error, result) => {
                                                                   result.map(iter=>{
                                                                       sum=iter.invoiceValue+sum
                                                                   })
                                                                   invoiceValue.push(sum)
                                                                   sum=0
                                                                   Sell.find({invoiceCreateMonth:9}).select('invoiceValue')
                                                                       .exec((error, result) => {
                                                                           result.map(iter=>{
                                                                               sum=iter.invoiceValue+sum
                                                                           })
                                                                           invoiceValue.push(sum)
                                                                           sum=0
                                                                           Sell.find({invoiceCreateMonth:10}).select('invoiceValue')
                                                                               .exec((error, result) => {
                                                                                   result.map(iter=>{
                                                                                       sum=iter.invoiceValue+sum
                                                                                   })
                                                                                   invoiceValue.push(sum)
                                                                                   sum=0
                                                                                   Sell.find({invoiceCreateMonth:11}).select('invoiceValue')
                                                                                       .exec((error, result) => {
                                                                                           result.map(iter=>{
                                                                                               sum=iter.invoiceValue+sum
                                                                                           })
                                                                                           invoiceValue.push(sum)
                                                                                           sum=0
                                                                                           Sell.find({invoiceCreateMonth:12}).select('invoiceValue')
                                                                                               .exec((error, result) => {
                                                                                                   result.map(iter=>{
                                                                                                       sum=iter.invoiceValue+sum
                                                                                                   })
                                                                                                   invoiceValue.push(sum)
                                                                                                   sum=0
                                                                                                 //  console.log(invoiceValue)
                                                                                                   res.send(invoiceValue)
                                                                                               })
                                                                                       })
                                                                               })
                                                                       })
                                                               })
                                                       })
                                               })
                                       })
                               })
                       })
               })
       })
}