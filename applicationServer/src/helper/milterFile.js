const path = require("path")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null,path.join(path.dirname(__dirname ),'uploads/'))
    },
    filename: function (req, file, cb) {
        // cb(null, file.fieldname + "-" + Date.now()+".jpg")
        cb(null, file.originalname)
    }
})
const fileFilter =(req,file,cb)=>{
    const filetypes = /jpeg|jpg|png/;
    if(file.mimetype==='image/png'|| file.mimetype==='image/jpg'||file.mimetype==='image/jpeg'){
        cb(null,true);
    }else {
        cb("Error: File upload only supports the "
            + "following filetypes - " + filetypes);
    }
}
const upload=multer({storage:storage,fileFilter:fileFilter})
module.exports={upload}
