var mongoose=require('mongoose')
//var crypto = require('crypto')
var employee = new mongoose.Schema({
    firstName: {
        type:String,
       // require:true,
       trim:true,
     toLowerCase:true,
    },
    lastName: {
        type:String,
       // require:true,
        trim:true,
        toLowerCase:true,
    },
    age:{
        type:Number,
      //  min: [18, 'Must be at least 18, got {VALUE}'],
      //  max:96,
       // default:25,
    },
    role:{
        type:String,
       enum: ['employee','admin'],
    },
    contact:[
        {_id:false,
            mobile:{
                type:Number,
                //unique:true,
               // maxLength: [10, 'Must be at most 10, got {VALUE}'],
               // minLength: [10, 'Must be at least 10, got {VALUE}'],
                trim:true
            },
            anotherMobile:{
                type:Number,
                //unique:true,
              //  maxLength: [10, 'Must be at most 10, got {VALUE}'],
               // minLength: [10, 'Must be at least 10, got {VALUE}'],
                trim:true
            },
            email: {
                type:String,
               // required:true,
             //   unique:true,
            }
        }
    ],
    empInfo:[
        {_id:false,
            designation:{
                type:String,
                trim:true
            },

            joinDate:{
                type:String
            },
            salary:{
                type:Number,
               // require:true,
            },
            empNote:{
                type:String,
                trim:true
            }
        }
    ],
    bankDetails:[
        {_id:false,
            bankName:{
                type:String,
                trim:true,
                toLowerCase:true,
               // enum:{
                   // values: ['bank of india','state bank','punjab bank','icici bank'],
                //    message: '{VALUE} is not supported',
              //  },
            },
            branchName:{
                type:String,
                trim:true,
                toLowerCase:true,
            },
            AccountNum:{
                type:Number,
               // maxLength: [15, 'Must be at most 15, got {VALUE}'],
            //    minLength: [15, 'Must be at least 15, got {VALUE}'],
            },
            ifsCode:{
                type:String,
             //   maxLength: [11, 'Must be at most 11, got {VALUE}'],
            //    minLength: [11, 'Must be at least 11, got {VALUE}'],
                toUpperCase:true
            },
            panNum:{
                type:String,
                trim:true,
                toUpperCase:true
            },
            aadharNum:{
                type:Number,
              //  maxLength:[12, 'Must be at most 12, got {VALUE}'],
              //  minLength:[12, 'Must be at most 11, got {VALUE}'],
                toUpperCase:true
            }
        }
    ],
    address:[
        {
            city:{
                type:String,
               // require:true,
                trim:true,
                lowerCase:true,
            },
            dist:{
                type:String,
            //    require:true,
              //  trim:true,
              //  lowerCase:true,
            },
            teh:{
                type:String,
             //   require:true,
              //  trim:true,
              //  lowerCase:true,
            },
            pin:{
                type:Number,
              //  minLength: [6, 'Must be at least 6, got {VALUE}'],
              //  maxLength: [6, 'Must be at most 6, got {VALUE}'],
            },
            state:{
                type:String,
               //require:true,
              //  trim:true,
               // lowerCase:true,
            },
            stateCode:{
                type:Number,
              //  require:true,
            },
            country:{
                type:String,
            }
        }
    ]
})

const Employee=new mongoose.model("employee",employee)
employee.index({firstName:'text',lastName:'text',
    role:'text','contact.email':'text',
    'empInfo.designation':'text','address.city':'text',
    'address.dist':'text','address.teh':'text'})
module.exports=Employee


