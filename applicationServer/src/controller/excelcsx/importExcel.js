const xlsx=require('xlsx')
const Invoice=require('../../model/sales')
const Purchase = require('../../model/purchase')
const Employee= require('../../model/Employee')
exports.importInvoiceData = function (req, res, next) {
    const file = req.file
    if (!file) {
        const error = new Error('please upload file')
        return next(error)
    }
    var Obj = [], obj, i
    var workbook = xlsx.readFile(req.file.path)  // get file path
    var sheetName = workbook.SheetNames   // get sheets name and sheets are store in array  " [ 'sheet1' ] "
    var x = 0,i=1
    sheetName.forEach(element => {   // all sheet remove in array
        var xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName[x]])   // get sheet sheet1 with out array
        xlData.map(xlData => {
            if(xlData.invoiceNumber==null){
                obj.productDetails.push({
                    productName: xlData.productName,
                    HSNCode: xlData.HSNCode,
                    productQuantity: xlData.quantity,
                    productRate: xlData.rate,
                    productAmount: xlData.amount
                })

            }else{
                obj = {
                    invoiceNumber: xlData.invoiceNumber,
                    invoiceDate: xlData.invoiceDate,
                    sellerInfo:req.staticData,//get static data on static file and show database
                    productDetails:[{
                        productName:xlData.productName,
                        HSNCode:xlData.HSNCode,
                        productQuantity:xlData.quantity,
                        productRate:xlData.rate,
                        productAmount:xlData.amount
                    }],
                    custmerInfo: {
                        CustmerName: xlData.CustmerName,
                        GST: xlData.GST,
                        mobile: xlData.mobile,
                        email: xlData.email,
                        city: xlData.city,
                        teh:xlData.teh,
                        dist: xlData.dist,
                        state: xlData.state,
                        stateCode: xlData.stateCode,
                        country: xlData.Country
                    },
                    textableValue: xlData.textableValue,
                    CGST: xlData.CGST,
                    SGST: xlData.SGST,
                    IGST: xlData.IGST,
                    invoiceValue: xlData.invoiceValue,
                    CGSTValue: xlData.CGSTValue,
                    SGSTValue: xlData.SGSTValue,
                    IGSTValue: xlData.IGSTValue
                }
                Obj.push(obj)
            }
        })
        Invoice.insertMany(Obj, function (err, data) {
            if (err) {
                res.send(err)
                console.log(err)
            }else
                res.send(data)
        })
    })
}

exports.importPurchaseData=function (req,res,next){
      const file = req.file
    if (!file) {
        const error = new Error('please upload file')
        return next(error)
    }
    var Obj = [], obj, i
    var workbook = xlsx.readFile(req.file.path)
    var sheetName = workbook.SheetNames
    var x = 0,i=1
    sheetName.forEach(eliment=> {
        var xldata = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName[x]])
        xldata.map(xlData => {
            if (xlData.invoiceNumber == null) {
                obj.productDetails.push({
                    productName: xlData.productName,
                    HSNCode: xlData.HSNCode,
                    productQuantity: xlData.quantity,
                    productRate: xlData.rate,
                    productAmount: xlData.amount
                })
            } else {
                obj = {
                    invoiceNumber: xlData.invoiceNumber,
                    invoiceDate: xlData.invoiceDate,
                    invoiceType:xlData.invoiceType,
                    invoiceCreateMonth:xlData.invoiceCreateMonth,
                    productDetails: [{
                        productName: xlData.productName,
                        HSNCode: xlData.HSNCode,
                        productQuantity: xlData.quantity,
                        productRate: xlData.rate,
                        productAmount: xlData.amount
                    }],

                    sellerInfo: {
                        sellerName: xlData.sellerName,
                        GSTSeller: xlData.GSTSeller,
                        mobileSeller: xlData.mobileSeller,
                        emailSeller: xlData.emailSeller,
                        streetAddSeller:xlData.streetAddSeller,
                        citySeller: xlData.citySeller,
                        pinSeller: xlData.pinSeller,
                        stateSeller: xlData.stateSeller,
                        stateCodeSeller:xlData.stateCodeSeller,
                        countrySeller: xlData.countrySeller
                    },
                    custmerInfo: {
                        CustmerName: xlData.CustmerName,
                        GST: xlData.GST,
                        mobile: xlData.mobile,
                        email: xlData.email,
                        city: xlData.city,
                        teh: xlData.teh,
                        dist: xlData.dist,
                        state: xlData.state,
                        stateCode: xlData.stateCode,
                        country: xlData.Country
                    },
                    textableValue: xlData.textableValue,
                    CGST: xlData.CGST,
                    SGST: xlData.SGST,
                    IGST: xlData.IGST,
                    invoiceValue: xlData.invoiceValue,
                    CGSTValue: xlData.CGSTValue,
                    SGSTValue: xlData.SGSTValue,
                    IGSTValue: xlData.IGSTValue
                }
                Obj.push(obj)
            }

        })
        Purchase.insertMany(Obj, function (err, data) {
            if (err) {
                res.send(err)
            }else
                res.send(data)
        })
    })


}

exports.importEmployeeData=function (req,res,next) {
    const file = req.file
    if (!file) {
        const error = new Error('please upload file')
        return next(error)
    }
    var Obj = []
    var workbook = xlsx.readFile(req.file.path)  // get file path
    var sheetName = workbook.SheetNames   // get sheet name
    var x = 0
    sheetName.forEach(element => {
        var xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName[x]])
        xlData.map(xlData => {
            var obj = {
                firstName: xlData.firstName,
                lastName: xlData.lastName,
                age: xlData.age,
                role: xlData.role,
                contact: {
                    mobile: xlData.mobile,
                    anotherMobile: xlData.anotherMobile,
                    email: xlData.email,
                },
                empInfo: {
                    designation: xlData.designation,
                    joinDate: xlData.joinDate,
                    salary: xlData.salary,
                    empNote: xlData.empNote,
                },
                bankDetails: {
                    bankName: xlData.bankName,
                    branchName: xlData.branchName,
                    AccountNum: xlData.AccountNum,
                    ifsCode: xlData.ifsCode,
                    panNum: xlData.panNum,
                    aadharNum: xlData.aadharNum,
                },
                address: {
                    streetAdd: xlData.streetAdd,
                    city: xlData.City,
                    teh: xlData.Tehsil,
                    dist: xlData.Dist,
                    pin: xlData.Pin,
                    state: xlData.State,
                    stateCode: xlData.stateCode,
                    country: xlData.Country,
                }
            }
            Obj.push(obj)
        })
        Employee.insertMany(Obj, function (err, data) {
            if (err) {
                res.send(err)
            }
            res.send(data)
        })
    })

}
