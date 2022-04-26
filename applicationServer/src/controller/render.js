var Invoice=require('../model/sales')
exports.getRender=function (req,res,next) {

    var invoiceNo=req.query.invoiceNo
    Invoice.findOne({invoiceNumber:invoiceNo},function (err,invoice) {
        if(!err){
            if(invoice==null){
                res.send('invoice are not present')
            } else{
                    res.render('sale', {data:invoice},function (err, html) {
                   res.send(html)
             })
            }
        }else res.send(err)
    })
}
