const express = require('express')
var multer=require('multer')
var path=require('path')
router = express.Router()


const { exportsJsonToExcel } = require('../controller/excelcsx/exportExcel');
const { downloadMultiFile} = require('../controller/excelcsx/exportallExcel');
const { importInvoiceData, importPurchaseData, importEmployeeData} = require("../controller/excelcsx/importExcel");
const {getStaticContentInvoice, getStaticContentInvoice1} = require("../controller/staticData");

// multer code

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null,path.join(path.dirname(__dirname ),'uploads'))
    },
     filename: function (req, file, cb) {
        cb(null, file.originalname)

    }
})

const upload = multer({ storage:storage })
//module.exports=upload


//upload file


router.post('/employeedata',upload.single('excel'),importEmployeeData)
router.post('/invoice',upload.single('excel'),getStaticContentInvoice1,importInvoiceData)
router.post('/purchase',upload.single('excel'),importPurchaseData)

//importExcelData

router.get('/download',exportsJsonToExcel) //download excel  file as input
router.get('/downloads',downloadMultiFile) //download file all file in excel


module.exports=router