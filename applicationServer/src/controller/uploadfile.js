
const SingleFile = require('../model/singleFile')
const MultiFile=require('../model/multiFile')
const path=require('path')

exports.singleFileUploads=function (req,res){
    const file= new SingleFile({
        fileName:req.file.originalname,
        filePath:req.file.path,
        fileType:req.file.mimetype,
        fileSize:req.file.size
    })
    file.save(function (err,file){
        if(!err){
            res.send('file upload success'+file)
        }else {
            res.send(err)
        }
    })
}
exports.multiFileUploads=function (req,res){
    let filesCollection=[]
    if(req.files.length>0){
        filesCollection=req.files.map(file=>{

            return {
                fileName:file.filename,
                filePath:file.path,
                fileType:file.mimetype,
                fileSize:file.size
            }
        })
        const multiFiles=new MultiFile({
            title:req.body.title,
            filesCollection
        })
        multiFiles.save((err,files)=>{
            if(err)  res.send(err)
            else  res.status(201).send(files)
        })
    }else{
        res.send('insert at least one file')
    }
}

exports.getFile=function (req,res){
    SingleFile.find(function (err ,data){
        if(!err){
            res.send(data)
        }
    })
}
exports.deleteFile=function (req,res){
    SingleFile.deleteMany(function (err,data){
        if(!err){
            res.send(data)

        }
        else res.send(err)
    })
}
exports.downloadFile = function (req, res){
    const fileName = req.params.name;
    const directoryPath = (path.join(path.dirname(__dirname ),'uploads/'))
    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
};

