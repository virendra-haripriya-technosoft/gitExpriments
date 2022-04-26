const xlsx=require('xlsx')
const fs = require("fs");
const Invoice=require('../../model/sales')
const Purchase = require('../../model/purchase')
const Employee =require('../../model/Employee')
// mongodb to excel sheet convertor and download file
exports.exportsJsonToExcel=function (req,res,next) {
    const match= req.query.match
    console.log(match)
    var wb=xlsx.utils.book_new()
    if(match==='invoice') {
        Invoice.find(function (err, data) {
            if (!err) {
                var invoice = extractAsExcelInvoice(data)
                var temp = JSON.stringify(invoice)
                temp = JSON.parse(temp)
                var ws = xlsx.utils.json_to_sheet(temp)
                var down = 'invoice.xlsx'
                xlsx.utils.book_append_sheet(wb, ws, 'sheet1')
                xlsx.writeFile(wb, down)
                res.download(down)
            }
        })
    }else if(match==='purchase'){
        Purchase.find(function (err,data) {
            if(!err){
                var purchase=extractAsExcelPurchase(data)
                var temp=JSON.stringify(purchase)
                temp=JSON.parse(temp)
                var ws=xlsx.utils.json_to_sheet(temp)
                var down='purchase.xlsx'
                xlsx.utils.book_append_sheet(wb,ws,'sheet1')
                xlsx.writeFile(wb,down)
                res.download(down)

            }else res.send(err)
        })
    }else if(match==='employee'){
        Employee.find(function (err,data){
            if(!err){
                console.log(data)
                var employee=extractAsExcelEmployee(data)
                var temp=JSON.stringify(employee)
                temp=JSON.parse(temp)
                var ws=xlsx.utils.json_to_sheet(temp)
                var down='employee.xlsx'
                xlsx.utils.book_append_sheet(wb,ws,'sheet1')
                xlsx.writeFile(wb,down)
                res.download(down)

            }else res.send(err)
        })
    }else res.send('file note match')

}

function extractAsExcelInvoice(invoice) {
    var Obj=[],productLength=[],i=0
    invoice.map(productDetails=>{
        productLength.push(productDetails.productDetails.length)
    })
    for(iter2=0;iter2<invoice.length;iter2++){
        for(iter3=0;iter3<productLength[i];iter3++){
            if(iter3===0){
                var  obj1={
                    invoiceNumber:invoice[iter2].invoiceNumber,
                    invoiceDate:invoice[iter2].invoiceDate,
                    productName:invoice[iter2].productDetails[iter3].productName,
                    HSNCode:invoice[iter2].productDetails[iter3].HSNCode,
                    quantity:invoice[iter2].productDetails[iter3].productQuantity,
                    rate:invoice[iter2].productDetails[iter3].productRate,
                    amount:invoice[iter2].productDetails[iter3].productAmount,
                    textableValue:invoice[iter2].textableValue,
                    CGST:invoice[iter2].CGST,
                    SGST:invoice[iter2].SGST,
                    IGST:invoice[iter2].IGST,
                    CGSTValue:invoice[iter2].CGSTValue,
                    SGSTValue:invoice[iter2].SGSTValue,
                    IGSTValue:invoice[iter2].IGSTValue,
                    invoiceValue:invoice[iter2].invoiceValue,
                    CustomerName:invoice[iter2].custmerInfo[0].CustomerName,
                    GST:invoice[iter2].custmerInfo[0].GST,
                    mobile:invoice[iter2].custmerInfo[0].mobile,
                    email:invoice[iter2].custmerInfo[0].email,
                    streetAddress:invoice[iter2].custmerInfo[0].streetAdd,
                    Pin:invoice[iter2].custmerInfo[0].pin,
                    city:invoice[iter2].custmerInfo[0].city,
                    teh:invoice[iter2].custmerInfo[0].teh,
                    dist:invoice[iter2].custmerInfo[0].dist,
                    State:invoice[iter2].custmerInfo[0].state,
                    StateCode:invoice[iter2].custmerInfo[0].stateCode,
                    Country: invoice[iter2].custmerInfo[0].country,
                    sellerName:invoice[iter2].sellerInfo.sellerName,
                    GSTSeller:invoice[iter2].sellerInfo.GSTSeller,
                    mobileSeller:invoice[iter2].sellerInfo.mobileSeller,
                    emailSeller:invoice[iter2].sellerInfo.emailSeller,
                    streetAddSeller:invoice[iter2].sellerInfo.streetAddSeller,
                    citySeller:invoice[iter2].sellerInfo.citySeller,
                    pinSeller:invoice[iter2].sellerInfo.pinSeller,
                    TehsilSeller:invoice[iter2].sellerInfo.tehSeller,
                    DistrictSeller:invoice[iter2].sellerInfo.distSeller,
                    stateSeller:invoice[iter2].sellerInfo.stateSeller,
                    stateCodeSeller: invoice[iter2].sellerInfo.stateCodeSeller,
                    CountrySeller:invoice[iter2].sellerInfo.countrySeller
                }
                Obj.push(obj1)
            }else{
                var obj2={
                    productName:invoice[iter2].productDetails[iter3].productName,
                    HSNCode:invoice[iter2].productDetails[iter3].HSNCode,
                    quantity:invoice[iter2].productDetails[iter3].productQuantity,
                    rate:invoice[iter2].productDetails[iter3].productRate,
                    amount:invoice[iter2].productDetails[iter3].productAmount,
                }
                Obj.push(obj2)

            }
        }
        i++
    }

    return Obj
}
// purchase data
function extractAsExcelPurchase(purchase) {
    var Obj=[],productLength=[],i=0
    purchase.map(productDetails=>{
        productLength.push(productDetails.productDetails.length)
    })
    for(iter2=0;iter2<purchase.length;iter2++){
        for(iter3=0;iter3<productLength[i];iter3++){
            if(iter3===0){
                var  obj1={
                    invoiceNumber:purchase[iter2].invoiceNumber,
                    invoiceDate:purchase[iter2].invoiceDate,
                    invoiceType:purchase[iter2].invoiceType,
                    invoiceCreateMonth:purchase[iter2].invoiceCreateMonth,
                    productName:purchase[iter2].productDetails[iter3].productName,
                    HSNCode:purchase[iter2].productDetails[iter3].HSNCode,
                    quantity:purchase[iter2].productDetails[iter3].productQuantity,
                    rate:purchase[iter2].productDetails[iter3].productRate,
                    amount:purchase[iter2].productDetails[iter3].productAmount,
                    textableValue:purchase[iter2].textableValue,
                    CGST:purchase[iter2].CGST,
                    SGST:purchase[iter2].SGST,
                    IGST:purchase[iter2].IGST,
                    CGSTValue:purchase[iter2].CGSTValue,
                    SGSTValue:purchase[iter2].SGSTValue,
                    IGSTValue:purchase[iter2].IGSTValue,
                    invoiceValue:purchase[iter2].invoiceValue,
                    CustomerName:purchase[iter2].custmerInfo[0].CustmerName,
                    GST:purchase[iter2].custmerInfo[0].GST,
                    mobile:purchase[iter2].custmerInfo[0].mobile,
                    email:purchase[iter2].custmerInfo[0].email,
                    streetAddress:purchase[iter2].custmerInfo[0].streetAdd,
                    Pin:purchase[iter2].custmerInfo[0].pin,
                    city:purchase[iter2].custmerInfo[0].city,
                    teh:purchase[iter2].custmerInfo[0].teh,
                    dist:purchase[iter2].custmerInfo[0].dist,
                    State:purchase[iter2].custmerInfo[0].state,
                    StateCode:purchase[iter2].custmerInfo[0].stateCode,
                    Country: purchase[iter2].custmerInfo[0].country,
                    sellerName:purchase[iter2].sellerInfo[0].sellerName,
                    GSTSeller:purchase[iter2].sellerInfo[0].GSTSeller,
                    mobileSeller:purchase[iter2].sellerInfo[0].mobileSeller,
                    emailSeller:purchase[iter2].sellerInfo[0].emailSeller,
                    streetAddSeller:purchase[iter2].sellerInfo[0].streetAddSeller,
                    citySeller:purchase[iter2].sellerInfo[0].citySeller,
                    pinSeller:purchase[iter2].sellerInfo[0].pinSeller,
                    TehsilSeller:purchase[iter2].sellerInfo[0].tehSeller,
                    DistrictSeller:purchase[iter2].sellerInfo[0].distSeller,
                    stateSeller:purchase[iter2].sellerInfo[0].stateSeller,
                    stateCodeSeller: purchase[iter2].sellerInfo[0].stateCodeSeller,
                    CountrySeller:purchase[iter2].sellerInfo[0].countrySeller
                }

                Obj.push(obj1)

            }else{
                var obj2={
                    productName:purchase[iter2].productDetails[iter3].productName,
                    HSNCode:purchase[iter2].productDetails[iter3].HSNCode,
                    quantity:purchase[iter2].productDetails[iter3].productQuantity,
                    rate:purchase[iter2].productDetails[iter3].productRate,
                    amount:purchase[iter2].productDetails[iter3].productAmount,
                }
                Obj.push(obj2)

            }
        }
        i++
    }

    return Obj
}
// employee data
function extractAsExcelEmployee(employee) {
    var Obj = []
    for (iter = 0; iter < employee.length; iter++) {
        var obj1 = {
            // _id: employee[iter]._id,
            firstName: employee[iter].firstName,
            lastName: employee[iter].lastName,
            age: employee[iter].age,
            role: employee[iter].role,
            mobile: employee[iter].contact[0].mobile,
            anotherMobile: employee[iter].contact[0].anotherMobile,
            email: employee[iter].contact[0].email,
            designation: employee[iter].empInfo[0].designation,
            joinDate: employee[iter].empInfo[0].joinDate,
            salary: employee[iter].empInfo[0].salary,
            bankName: employee[iter].bankDetails[0].bankName,
            branchName: employee[iter].bankDetails[0].branchName,
            AccountNum: employee[iter].bankDetails[0].AccountNum,
            ifsCode: employee[iter].bankDetails[0].ifsCode,
            panNum: employee[iter].bankDetails[0].panNum,
            aadharNum: employee[iter].bankDetails[0].aadharNum,
            City: employee[iter].address[0].city,
            Tehsil:employee[iter].address[0].teh,
            Pin:employee[iter].address[0].pin,
            Dist:employee[iter].address[0].dist,
            State: employee[iter].address[0].state,
            stateCode:employee[iter].address[0].stateCode,
            Country:employee[iter].address[0].country

        }

        Obj.push(obj1)
    }
    return Obj
}
