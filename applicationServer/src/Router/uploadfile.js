
const express = require('express')
const router= express.Router()
const {upload}=require('../helper/milterFile')
const {singleFileUploads,multiFileUploads,getFile,downloadFile,deleteFile}=require('../controller/uploadfile')



router.post('/singlefile',upload.single('file'),singleFileUploads)
router.post('/multifile',upload.array('files'),multiFileUploads)
router.get('/getfile',getFile)
router.delete('/file',deleteFile)
router.get('/file/:name',downloadFile)


module.exports=router
