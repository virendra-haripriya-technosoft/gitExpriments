
var mongoose=require('mongoose')
const Static = require("./staticData");
var saleSchema = new mongoose.Schema({

    invoiceNumber:{
        type:String,
        unique:true,
    },
    invoiceDate: {
        type:String
    },
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
    CGST:Number,
    SGST:Number ,
    IGST:Number ,
    invoiceCreateMonth:Number,
    CGSTValue:{type:Number,default:0},
    IGSTValue:{type:Number,default:0},
    SGSTValue:{type:Number,default:0},
    textableValue:{type:Number,default:0},
    invoiceValue:{type:Number,default:0},
    custmerInfo:[{
        _id:false,
        CustmerName:String,
        GST:{
            type:String,
            trim:true,
            uppercase:true,
            require:true
        },
        mobile:{
            type:Number,
            maxLength: [10, 'Must be at most 10, got {VALUE}'],
            minLength: [10, 'Must be at least 10, got {VALUE}'],
            trim:true
        },
        email: { type:String },
        streetAdd:{
            type:String,
        },
        city:{
            type:String,
            require:true,
            trim:true,
            lowerCase:true
        },
        teh:{
            type:String,
            require:true,
            trim:true,
            lowerCase:true
        },
        dist:{
            type:String,
            require:true,
            trim:true,
            lowerCase:true
        },

        pin:{
            type:Number,
            minlength: [6, 'Must be at least 6, got {VALUE}'],
            maxlength: [6, 'Must be at most 6, got {VALUE}'],
            default:451660
        },
        state:{
            type:String,
            require:true,
            trim:true,
            lowerCase:true,
            default:'Madhya Paresh'
        },
        stateCode:{
            type:Number,
            require:true,
            default:23
        },
        country:{
            type:String,
        },
    }],
    sellerInfo:Static.staticData
})
const Sales=new mongoose.model("Sale",saleSchema)
saleSchema.index({invoiceNumber:'text',
    'productDetails.productName':'text',
    'customerInfo.CustomerName':'text',
    'customerInfo.email':'text','customerInfo.city':'text',
    'customerInfo.teh':'text','customerInfo.dist':'text',
    'sellerInfo.sellerName':'text',
    'sellerInfo.GSTSeller':'text',
    'sellerInfo.emailSeller':'text',
    'sellerInfo.streetAddSeller':'text','sellerInfo.citySeller':'text','sellerInfo.distSeller':'text'})

module.exports=Sales








/*
var mongoose=require('mongoose')
var saleSchema = new mongoose.Schema({

    invoiceNumber:{
        type:String,
       // require:true,
       // maxLength:[5,'Must be at most , got {VALUE} '],
       // minLength:[4,'{VALUE}']
    },
    invoiceDate: {
        type:String

       // require:true
    },
    customerInfo:[{
        _id:false,
        CustomerName:String,
        GSTNo:{
            type:String,
          //  trim:true,
            //toUpperCase:true,
           // require:true
        },
    }],
   customerContact:[
        {
            _id:false,
            mobile:{
                type:Number,
                //unique:true,
             //   require:true,
               // maxLength: [10, 'Must be at most 10, got {VALUE}'],
              //  minLength: [10, 'Must be at least 10, got {VALUE}'],
              //  trim:true
            },
            email: {
                type:String,
               // required:true,
               // unique:true,
            }
        }
    ],

   customerAddress:[
        {   _id:false,
            streetAdd:{
                type:String,
            },
            city:{
                type:String,
               // require:true,
              //  trim:true,
               // lowerCase:true
            },
            teh:{
                type:String,
              //  require:true,
              //  trim:true,
               // lowerCase:true
            },
            dist:{
                type:String,
               // require:true,
                //trim:true,
              //  lowerCase:true
            },

            pin:{
                type:String,
              //  require:true,
               // maxLength:[5,'Must be at most , got {VALUE} '],
               // minLength:[4,'{VALUE}']
            },
            state:{
                type:String,
               // require:true,
              //  trim:true,
               // lowerCase:true,
                default:'Mp'
            },
            stateCode:{
                type:Number,
              //  require:true,
                default:23
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
    sellerInfo:[

        {
            _id: false,
            sellerName: String,
            GSTNo: {
                type: String,
              //  trim: true,
              //  toUpperCase: true,
              //  require: true
            },
        }
    ],

    sellerAddress:[
        {   _id:false,
            streetAdd:{
                type:String,
            },
            city:{
                type:String,
               // require:true,
              //  trim:true,
               // lowerCase:true
            },
            teh:{
                type:String,
               // require:true,
              //  trim:true,
               // lowerCase:true
            },
            dist:{
                type:String,
               // require:true,
              //  trim:true,
              //  lowerCase:true
            },

            pin:{
                type:Number,
              //  minlength: [6, 'Must be at least 6, got {VALUE}'],
               // maxlength: [6, 'Must be at most 6, got {VALUE}'],
                default:451660
            },
            state:{
                type:String,
               // require:true,
               // trim:true,
              //  lowerCase:true,
                default:'Mp'
            },
            stateCode:{
                type:Number,
                //require:true,
                default:23
            },
            country:{
                type:String,
            },
        }
    ],

    sellerContact:[
        {
            _id:false,
            mobile:{
                type:Number,
               // unique:true,
               // require:true,
              //  maxLength: [10, 'Must be at most 10, got {VALUE}'],
             //   minLength: [10, 'Must be at least 10, got {VALUE}'],
              //  trim:true
            },
            email: {
                type:String,
              //  required:true,
              //  unique:true,
            }
        }
    ],
    invoiceInfo:[
        {
            _id:false,
            textableValue:Number,
            CGST:Number,
            SGST:Number,
            IGST:Number,
            invoiceValue:{
                type:Number,
            },
            CGSTValue:{type:Number,default:0},
            IGSTValue:{type:Number,default:0},
            SGSTValue:{type:Number,default:0},
        },

    ],
    role:{
        type:String,
        enum:['purchase','sale']
    }

})
const Sales=new mongoose.model("Sale",saleSchema)
saleSchema.index({invoiceNumber:'text',
    'customerInfo.CustomerName':'text','customerInfo.GSTNo':'text',
'customerContact.email':'text','customerAddress.streetAdd':'text',
    'customerAddress.teh':'text',
    'customerAddress.dist':'text',
    'customerAddress.city':'text',
    'productDetails.productName':'text',
    'sellerAddress.city':'text','sellerAddress.dist':'text',
    'sellerAddress.teh':'text',
    'sellerAddress.streetAdd':'text','sellerContact.email':'text',})
module.exports=Sales




 */