var mongoose=require('mongoose')
var purchase_Invoice = new mongoose.Schema({
    invoiceNumber:{
        type:String,
        require:true,
        unique:true,
    },
    invoiceDate: {
        type:String,
       // require:true,

    },

    custmerInfo:[{
        _id:false,
        CustmerName:String,
        GST:{
            type:String,
            trim:true,
            uppercase:true,
          //  require:true
        },
        mobile:{
            type:Number,
            // unique:true,
            //require:true,
            maxLength: [10, 'Must be at most 10, got {VALUE}'],
            minLength: [10, 'Must be at least 10, got {VALUE}'],
            trim:true
        },
        email: {
            type:String,
           // required:true,
            // unique:true,
        },
        streetAdd:{
            type:String,
        },
        city:{
            type:String,
           // require:true,
            trim:true,
            lowerCase:true
        },
        teh:{
            type:String,
           // require:true,
            trim:true,
            lowerCase:true
        },
        dist:{
            type:String,
           // require:true,
            trim:true,
            lowerCase:true
        },

        pin:{
            type:Number,
            minlength: [6, 'Must be at least 6, got {VALUE}'],
            maxlength: [6, 'Must be at most 6, got {VALUE}'],
        },
        state:{
            type:String,
          //  require:true,
            trim:true,
            lowerCase:true,
        },
        stateCode:{
            type:Number,
          //  require:true,
        },
        country:{
            type:String,
        },
    }],
    productDetails:[
        {
            _id:false,
            productName:{
                type:String,
                // trim:true,
            },
            HSNCode:{
                type:Number,
                // maxLength:[4,'velue is mor then allowed value {VALUE}'],
                //minLength:[3,'velue is mor then allowed value {VALUE}']
            },
            productQuantity:{
                type:Number
            },
            productRate:{
                type:Number,
            },
            productAmount:{
                type:Number
            },
        },
    ],
    invoiceType:{
        type:String,
        enum:['cash','non cash'],
    },
    invoiceCreateMonth:Number,
    CGST:Number,
    SGST:Number ,
    IGST:Number ,
    CGSTValue:{type:Number,default:0},
    IGSTValue:{type:Number,default:0},
    SGSTValue:{type:Number,default:0},
    textableValue:{type:Number,default:0},
    invoiceValue:{type:Number,default:0},
    sellerInfo:[
        {
            _id:false,
            sellerName:String,
            GSTSeller:{
                type:String,
                trim:true,
                uppercase:true,
               // require:true
            },

            mobileSeller:{
                type:Number,
                //   unique:true,
              //  require:true,
                maxLength: [10, 'Must be at most 10, got {VALUE}'],
                minLength: [10, 'Must be at least 10, got {VALUE}'],
                trim:true
            },
            emailSeller: {
                type:String,
              //  required:true,
                //  unique:true,
            },
            streetAddSeller:{
                type:String,
            },
            citySeller:{
                type:String,
             //   require:true,
                trim:true,
                lowerCase:true
            },
            tehSeller:{
                type:String,
              //  require:true,
                trim:true,
                lowerCase:true
            },
            distSeller:{
                type:String,
              //  require:true,
                trim:true,
                lowerCase:true
            },

            pinSeller:{
                type:Number,
                minlength: [6, 'Must be at least 6, got {VALUE}'],
                maxlength: [6, 'Must be at most 6, got {VALUE}'],
            },
            stateSeller:{
                type:String,
                require:true,
                trim:true,
                lowerCase:true,
            },
            stateCodeSeller:{
                type:Number,
                require:true,
            },
            countrySeller:{
                type:String,
            },
        }
    ],
})
var Purchase=new mongoose.model('parchase',purchase_Invoice)

purchase_Invoice.index({invoiceNumber:'text',
    'productDetails.productName':'text',
    'custmerInfo.CustmerName':'text','custmerInfo.GST':'text',
    'custmerInfo.email':'text','custmerInfo.city':'text',
    'custmerInfo.teh':'text','custmerInfo.dist':'text',
    'sellerInfo.sellerName':'text',
    'sellerInfo.GSTSeller':'text',
    'sellerInfo.emailSeller':'text',
    'sellerInfo.streetAddSeller':'text','sellerInfo.citySeller':'text','sellerInfo.distSeller':'text'})

module.exports=Purchase
