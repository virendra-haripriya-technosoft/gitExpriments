var mongoose=require('mongoose')

var customerSchema = mongoose.Schema({
    customerName:{
        type:String,
        //require:true,
        trim:true,
        lowerCase:true,
    },
    customerGST:{
        type:String,
        trim:true,
        toUpperCase:true,
       // require:true
    },
    contact:[
        {
            mobile:{
                type:Number,
                //unique:true,
                //require:true,
              //  maxLength: [10, 'Must be at most 10, got {VALUE}'],
              //  minLength: [10, 'Must be at least 10, got {VALUE}'],
               // trim:true
            },
            email: {
                type:String,
               // unique:true,
            },
        },

    ],
    bankDetails:[
        {
            bankName:{
                type:String,
               // trim:true,
               // toLowerCase:true,
               // enum:{
                  //  values: ['bank of india','state bank','punjab bank','icici bank'],
                  //  message: '{VALUE} is not supported',
                //},
            },
            branchName:{
                type:String,
               // trim:true,
               // toLowerCase:true,
            },
            AccountNum:{
                type:Number,
               // maxLength: [15, 'Must be at most 15, got {VALUE}'],
              //  minLength: [15, 'Must be at least 15, got {VALUE}'],
            },
            ifscCode:{
                type:String,
               // maxLength: [11, 'Must be at most 11, got {VALUE}'],
              //  minLength: [11, 'Must be at least 11, got {VALUE}'],
                //toUpperCase:true
            },
            panNum:{
                type:String,
              //  trim:true,
             //   toUpperCase:true
            },
            aadharNum:{
                type:Number,
                //trim:true,
               // toUpperCase:true
            }
        }
    ],
    customerAddress:[
        {
            city:{
                type:String,
              //  require:true,
              //  trim:true,
                lowerCase:true,
            },
            dist:{
                type:String,
                //require:true,
               // trim:true,
                lowerCase:true,
            },
            teh:{
                type:String,
              //  require:true,
              //  trim:true,
                lowerCase:true,
            },
            pin:{
                type:Number,
               // minlength: [6, 'Must be at least 6, got {VALUE}'],
                //maxlength: [6, 'Must be at most 6, got {VALUE}'],
            },
            state:{
                type:String,
                //require:true,
              //  trim:true,
                lowerCase:true,
            },
            stateCode:{
                type:Number,
                //require:true,
                default:23
            },
            Country:{
                type:String,
               // uppercase:true
                default:'india'
            }
        }
    ],

})
const Customer=new mongoose.model('Customer',customerSchema)

customerSchema.index({customerName:'text',customerGST:'text',
    'contact.email':'text',
    'customerAddress.city':'text',
    'customerAddress.dist':'text','customerAddress.teh':'text'})
module.exports=Customer

