const Purches = require('../model/purchase');
var Sell=require('../model/sales')
exports.charBar=function (req,res) {
    // this is first chart 
    var cash=[] ,nonCash=[]
    // i am get all data for Jan month
    Purches.find({invoiceCreateMonth:1},function (err,data) {
        if(!err) {
            var totalJanData =Object.keys(data).length
            // i am get only Jan data for cash
            Purches.find({invoiceType:'cash',invoiceCreateMonth:1},function (err,invoice){
                if(!err) {
                    var cashJanData= Object.keys(invoice).length
                    // i am get only Jan data for  non cash
                    Purches.find({invoiceType:'non cash',invoiceCreateMonth:1},function (err,invoice){
                        if(!err) {

                            // i am calculate percent cash and non cash

                            var nonCashJanData= Object.keys(invoice).length
                            cash.push(cashJanData*100/totalJanData)
                            nonCash.push(nonCashJanData*100/totalJanData)
                            // i am get all data for Feb month
                            Purches.find({invoiceCreateMonth:2},function (err,data) {
                                if(!err) {
                                    var totalMarchData =Object.keys(data).length
                                    // i am get only march data for cash
                                    Purches.find({invoiceType:'cash',invoiceCreateMonth:2},function (err,invoice){
                                        if(!err) {
                                            var cashData= Object.keys(invoice).length
                                            // i am get only march data for  non cash
                                            Purches.find({invoiceType:'non cash',invoiceCreateMonth:2},function (err,invoice){
                                                if(!err) {
                                                    var nonCashData= Object.keys(invoice).length
                                                    cash.push(cashData*100/totalMarchData)
                                                    nonCash.push(nonCashData*100/totalMarchData)

                                                    // i am get all data for march month
                                                    Purches.find({invoiceCreateMonth:3},function (err,data) {
                                                        if(!err) {
                                                            var totalMarchData =Object.keys(data).length
                                                            // i am get only march data for cash
                                                            Purches.find({invoiceType:'cash',invoiceCreateMonth:3},function (err,invoice){
                                                                if(!err) {
                                                                    var cashData= Object.keys(invoice).length
                                                                    // i am get only march data for  non cash
                                                                    Purches.find({invoiceType:'non cash',invoiceCreateMonth:3},function (err,invoice){
                                                                        if(!err) {
                                                                            var nonCashData= Object.keys(invoice).length
                                                                            cash.push(cashData*100/totalMarchData)
                                                                            nonCash.push(nonCashData*100/totalMarchData)
                                                                            Purches.find({invoiceCreateMonth:4},function (err,data) {
                                                                                if(!err) {
                                                                                    var totalMarchData =Object.keys(data).length
                                                                                    // i am get only march data for cash
                                                                                    Purches.find({invoiceType:'cash',invoiceCreateMonth:4},function (err,invoice){
                                                                                        if(!err) {
                                                                                            var cashData= Object.keys(invoice).length
                                                                                            // i am get only march data for  non cash
                                                                                            Purches.find({invoiceType:'non cash',invoiceCreateMonth:4},function (err,invoice){
                                                                                                if(!err) {
                                                                                                    var nonCashData= Object.keys(invoice).length
                                                                                                    cash.push(cashData*100/totalMarchData)
                                                                                                    nonCash.push(nonCashData*100/totalMarchData)
                                                                                                    // i am get all data for Feb month
                                                                                                    Purches.find({invoiceCreateMonth:5},function (err,data) {
                                                                                                        if(!err) {
                                                                                                            var totalMarchData =Object.keys(data).length
                                                                                                            // i am get only march data for cash
                                                                                                            Purches.find({invoiceType:'cash',invoiceCreateMonth:5},function (err,invoice){
                                                                                                                if(!err) {
                                                                                                                    var cashData= Object.keys(invoice).length
                                                                                                                    // i am get only march data for  non cash
                                                                                                                    Purches.find({invoiceType:'non cash',invoiceCreateMonth:5},function (err,invoice){
                                                                                                                        if(!err) {
                                                                                                                            var nonCashData= Object.keys(invoice).length
                                                                                                                            cash.push(cashData*100/totalMarchData)
                                                                                                                            nonCash.push(nonCashData*100/totalMarchData)
                                                                                                                            // i am get all data for march month
                                                                                                                            Purches.find({invoiceCreateMonth:6},function (err,data) {
                                                                                                                                if(!err) {
                                                                                                                                    var totalMarchData =Object.keys(data).length
                                                                                                                                    // i am get only march data for cash
                                                                                                                                    Purches.find({invoiceType:'cash',invoiceCreateMonth:6},function (err,invoice){
                                                                                                                                        if(!err) {
                                                                                                                                            var cashData= Object.keys(invoice).length
                                                                                                                                            // i am get only march data for  non cash
                                                                                                                                            Purches.find({invoiceType:'non cash',invoiceCreateMonth:6},function (err,invoice){
                                                                                                                                                if(!err) {
                                                                                                                                                    var nonCashData= Object.keys(invoice).length
                                                                                                                                                    cash.push(cashData*100/totalMarchData)
                                                                                                                                                    nonCash.push(nonCashData*100/totalMarchData)
                                                                                                                                                    // i am get all data for Feb month
                                                                                                                                                    Purches.find({invoiceCreateMonth:7},function (err,data) {
                                                                                                                                                        if(!err) {
                                                                                                                                                            var totalMarchData =Object.keys(data).length
                                                                                                                                                            // i am get only march data for cash
                                                                                                                                                            Purches.find({invoiceType:'cash',invoiceCreateMonth:7},function (err,invoice){
                                                                                                                                                                if(!err) {
                                                                                                                                                                    var cashData= Object.keys(invoice).length
                                                                                                                                                                    // i am get only march data for  non cash
                                                                                                                                                                    Purches.find({invoiceType:'non cash',invoiceCreateMonth:7},function (err,invoice){
                                                                                                                                                                        if(!err) {
                                                                                                                                                                            var nonCashData= Object.keys(invoice).length
                                                                                                                                                                            cash.push(cashData*100/totalMarchData)
                                                                                                                                                                            nonCash.push(nonCashData*100/totalMarchData)
                                                                                                                                                                            // i am get all data for Feb month
                                                                                                                                                                            Purches.find({invoiceCreateMonth:8},function (err,data) {
                                                                                                                                                                                if(!err) {
                                                                                                                                                                                    var totalMarchData =Object.keys(data).length
                                                                                                                                                                                    // i am get only march data for cash
                                                                                                                                                                                    Purches.find({invoiceType:'cash',invoiceCreateMonth:8},function (err,invoice){
                                                                                                                                                                                        if(!err) {
                                                                                                                                                                                            var cashData= Object.keys(invoice).length
                                                                                                                                                                                            // i am get only march data for  non cash
                                                                                                                                                                                            Purches.find({invoiceType:'non cash',invoiceCreateMonth:8},function (err,invoice){
                                                                                                                                                                                                if(!err) {
                                                                                                                                                                                                    var nonCashData= Object.keys(invoice).length
                                                                                                                                                                                                    cash.push(cashData*100/totalMarchData)
                                                                                                                                                                                                    nonCash.push(nonCashData*100/totalMarchData)
                                                                                                                                                                                                    // i am get all data for march month
                                                                                                                                                                                                    Purches.find({invoiceCreateMonth:9},function (err,data) {
                                                                                                                                                                                                        if(!err) {
                                                                                                                                                                                                            var totalMarchData =Object.keys(data).length
                                                                                                                                                                                                            // i am get only march data for cash
                                                                                                                                                                                                            Purches.find({invoiceType:'cash',invoiceCreateMonth:9},function (err,invoice){
                                                                                                                                                                                                                if(!err) {
                                                                                                                                                                                                                    var cashData= Object.keys(invoice).length
                                                                                                                                                                                                                    // i am get only march data for  non cash
                                                                                                                                                                                                                    Purches.find({invoiceType:'non cash',invoiceCreateMonth:9},function (err,invoice){
                                                                                                                                                                                                                        if(!err) {
                                                                                                                                                                                                                            var nonCashData= Object.keys(invoice).length
                                                                                                                                                                                                                            cash.push(cashData*100/totalMarchData)
                                                                                                                                                                                                                            nonCash.push(nonCashData*100/totalMarchData)
                                                                                                                                                                                                                            // i am get all data for Feb month
                                                                                                                                                                                                                            Purches.find({invoiceCreateMonth:10},function (err,data) {
                                                                                                                                                                                                                                if(!err) {
                                                                                                                                                                                                                                    var totalMarchData =Object.keys(data).length
                                                                                                                                                                                                                                    // i am get only march data for cash
                                                                                                                                                                                                                                    Purches.find({invoiceType:'cash',invoiceCreateMonth:10},function (err,invoice){
                                                                                                                                                                                                                                        if(!err) {
                                                                                                                                                                                                                                            var cashData= Object.keys(invoice).length
                                                                                                                                                                                                                                            // i am get only march data for  non cash
                                                                                                                                                                                                                                            Purches.find({invoiceType:'non cash',invoiceCreateMonth:10},function (err,invoice){
                                                                                                                                                                                                                                                if(!err) {
                                                                                                                                                                                                                                                    var nonCashData= Object.keys(invoice).length
                                                                                                                                                                                                                                                    cash.push(cashData*100/totalMarchData)
                                                                                                                                                                                                                                                    nonCash.push(nonCashData*100/totalMarchData)
                                                                                                                                                                                                                                                    // i am get all data for Feb month
                                                                                                                                                                                                                                                    Purches.find({invoiceCreateMonth:11},function (err,data) {
                                                                                                                                                                                                                                                        if(!err) {
                                                                                                                                                                                                                                                            var totalMarchData =Object.keys(data).length
                                                                                                                                                                                                                                                            // i am get only march data for cash
                                                                                                                                                                                                                                                            Purches.find({invoiceType:'cash',invoiceCreateMonth:11},function (err,invoice){
                                                                                                                                                                                                                                                                if(!err) {
                                                                                                                                                                                                                                                                    var cashData= Object.keys(invoice).length
                                                                                                                                                                                                                                                                    // i am get only march data for  non cash
                                                                                                                                                                                                                                                                    Purches.find({invoiceType:'non cash',invoiceCreateMonth:11},function (err,invoice){
                                                                                                                                                                                                                                                                        if(!err) {
                                                                                                                                                                                                                                                                            var nonCashData= Object.keys(invoice).length
                                                                                                                                                                                                                                                                            cash.push(cashData*100/totalMarchData)
                                                                                                                                                                                                                                                                            nonCash.push(nonCashData*100/totalMarchData)
                                                                                                                                                                                                                                                                            // i am get all data for march month
                                                                                                                                                                                                                                                                            Purches.find({invoiceCreateMonth:12},function (err,data) {
                                                                                                                                                                                                                                                                                if(!err) {
                                                                                                                                                                                                                                                                                    var totalMarchData =Object.keys(data).length
                                                                                                                                                                                                                                                                                    // i am get only march data for cash
                                                                                                                                                                                                                                                                                    Purches.find({invoiceType:'cash',invoiceCreateMonth:12},function (err,invoice){
                                                                                                                                                                                                                                                                                        if(!err) {
                                                                                                                                                                                                                                                                                            var cashData= Object.keys(invoice).length
                                                                                                                                                                                                                                                                                            // i am get only march data for  non cash
                                                                                                                                                                                                                                                                                            Purches.find({invoiceType:'non cash',invoiceCreateMonth:12},function (err,invoice){
                                                                                                                                                                                                                                                                                                if(!err) {
                                                                                                                                                                                                                                                                                                    var nonCashData= Object.keys(invoice).length
                                                                                                                                                                                                                                                                                                    cash.push(cashData*100/totalMarchData)
                                                                                                                                                                                                                                                                                                    nonCash.push(nonCashData*100/totalMarchData)
                                                                                                                                                                                                                                                                                                       // var obj={
                                                                                                                                                                                                                                                                                                     //       jan:cash[0], jan1:cash[1], jan2:cash[2], jan3:cash[3], jan4:cash[4], jan5:cash[5], jan6:cash[6], jan7:cash[7], jan8:cash[8], jan9:cash[9], jan10:cash[10], jan11:cash[11],
                                                                                                                                                                                                                                                                                                     //   }
                                                                                                                                                                                                                                                                                                     //  console.log(cash,nonCash)
                                                                                                                                                                                                                                                                                                        res.send(cash)
                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                else res.send(err)
                                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                        else res.send(err)
                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                else res.send(err)

                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                        else res.send(err)
                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                else res.send(err)
                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                        else res.send(err)

                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                        else res.send(err)
                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                else res.send(err)
                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                        else res.send(err)

                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                else res.send(err)
                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                        else res.send(err)
                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                else res.send(err)

                                                                                                                                                                                                                            })

                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        else res.send(err)
                                                                                                                                                                                                                    })
                                                                                                                                                                                                                }
                                                                                                                                                                                                                else res.send(err)
                                                                                                                                                                                                            })
                                                                                                                                                                                                        }
                                                                                                                                                                                                        else res.send(err)

                                                                                                                                                                                                    })

                                                                                                                                                                                                }
                                                                                                                                                                                                else res.send(err)
                                                                                                                                                                                            })
                                                                                                                                                                                        }
                                                                                                                                                                                        else res.send(err)
                                                                                                                                                                                    })
                                                                                                                                                                                }
                                                                                                                                                                                else res.send(err)

                                                                                                                                                                            })
                                                                                                                                                                        }
                                                                                                                                                                        else res.send(err)
                                                                                                                                                                    })
                                                                                                                                                                }
                                                                                                                                                                else res.send(err)
                                                                                                                                                            })
                                                                                                                                                        }
                                                                                                                                                        else res.send(err)

                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                                else res.send(err)
                                                                                                                                            })
                                                                                                                                        }
                                                                                                                                        else res.send(err)
                                                                                                                                    })
                                                                                                                                }
                                                                                                                                else res.send(err)

                                                                                                                            })
                                                                                                                        }
                                                                                                                        else res.send(err)
                                                                                                                    })
                                                                                                                }
                                                                                                                else res.send(err)
                                                                                                            })
                                                                                                        }
                                                                                                        else res.send(err)

                                                                                                    })
                                                                                                }
                                                                                                else res.send(err)
                                                                                            })
                                                                                        }
                                                                                        else res.send(err)
                                                                                    })
                                                                                }
                                                                                else res.send(err)

                                                                            })

                                                                        }
                                                                        else res.send(err)
                                                                    })
                                                                }
                                                                else res.send(err)
                                                            })
                                                        }
                                                        else res.send(err)

                                                    })
                                                }
                                                else res.send(err)
                                            })
                                        }
                                        else res.send(err)
                                    })
                                }
                                else res.send(err)

                            })
}

exports.charBar2=function (req,res) {

    var company=[],sum=0,invoiceValue=[],max=[],index,companyName=[]
    Sell.find(function (err,invoice) {
        if(!err){
         invoice.map(iter=>{
          iter.custmerInfo.map(iter1=>{
              company.push(iter1.CustmerName)
              company = [...new Set(company)];// no repeat data in array
          })
         })

              for(var i=0;i<company.length;i++){
                var search=company[i]

                Sell.find({
                    $or: [{
                        'custmerInfo.CustmerName':search
                    }]
                }).select('invoiceValue').exec(((error, result) => {

                    for(var j=0;j<result.length;j++) {
                        sum=result[j].invoiceValue+sum

                    }
                    invoiceValue.push(sum)
                    sum=0
                }))
        }
          setTimeout(()=>{
              for(var k=0;k<10;k++){
                  // find first value largeast
                  max.push(Math.max(...invoiceValue)); // find largeast number in array
                  index=invoiceValue.indexOf(max[k]); // find largast number index
                  companyName.push(company[index])
                  invoiceValue.splice(index, 1);   // remove data with the help of  index
                  company.splice(index, 1);

              }                             //  invoiceValue enter all invoiceValue // company enter all company name no repeat
             //console.log(max,companyName)   // maximum ten value enter in max  // maximum ten company enter in comapanyName

          },200)


        setTimeout(()=>{
                res.send(companyName)
               //res.send({max,companyName})
            },200)

        }else res.send(err)
})
}