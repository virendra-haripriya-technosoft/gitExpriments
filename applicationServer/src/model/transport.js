var mongoose=require('mongoose')
var transportSchema = new mongoose.Schema({
    transitName: {
        type:String,
       // require:true,
       // trim:true,
        lowerCase:true,
    },

    transitFee:{
        type:Number,
        //required:true,
    },
    vehicleDeatails:[{
        _id:false,
        vehicalInsurance:String,
        vehicalNum:String,
        vehicalPUC:String,
        vehicalRC:String,
        Capacity:String,
        permitNum:String
    }],
    transitInsurance:
        {
            type:String,
           // trim:true,
           // default:"2 year"
        },
    transitRelible:{
       type:String
    },
    transitCoverArea:
        {
            type:String,
           // trim:true,
        },
    transitService:
        {
            type :String,
          //  enum:{
             //   values:["truck","bus","car","bike"],
             //   message: `{VALUE} is not supported`,

           // }
        },
    driverDetails:[
        {_id:false,
            firstName:String,
            lastName:String,
            contact:Number,
            age:Number,

        }
    ],
    licenceinfo: [{
        _id:false,
        licenceNum:{
            type:String,
            // toUpperCase:true,
        },
        generateDate:{
            type:String
        },
        expiresDate:{
            type:String,
        }
    },
    ],
    bankDetails:[
        {     _id:false,
            bankName:{
                type:String,
               // trim:true,
               // toLowerCase:true,
               // enum:{
                 //   values: ['bank of india','state bank','punjab bank','icici bank'],
                 //   message: '{VALUE} is not supported',

               // },
            },
            branchName:{
                type:String,
               // trim:true,
                //toLowerCase:true,
            },
            accountNum:{
                type:Number,
               // maxLength: [15, 'Must be at most 15, got {VALUE}'],
               // minLength: [15, 'Must be at least 15, got {VALUE}'],
            },
            ifsCode:{
                type:String,
               // maxLength: [11, 'Must be at most 11, got {VALUE}'],
              //  minLength: [11, 'Must be at least 11, got {VALUE}'],
               // toUpperCase:true
            },
            panNum:{
                type:String,
                //trim:true,
               // toUpperCase:true
            }
        }
    ],
    transitToAddress:[
        {   _id:false,
            streetAdd:{
                type:String,
            },
            city:{
                type:String,
               // require:true,
               // trim:true,
               // lowerCase:true
            },
            teh:{
                type:String,
                //require:true,
               // trim:true,
                //lowerCase:true
            },
            dist:{
                type:String,
               // require:true,
               // trim:true,
              //  lowerCase:true
            },

            pin:{
                type:Number,
               // minlength: [6, 'Must be at least 6, got {VALUE}'],
               // maxlength: [6, 'Must be at most 6, got {VALUE}'],
            },
            state:{
                type:String,
                //require:true,
               // trim:true,
                //lowerCase:true,
            },
            stateCode:{
                type:Number,
               // require:true,
            },
            country:{
                type:String,
            },
        }
    ],
})
var Transport=new mongoose.model("Transport",transportSchema)

transportSchema.index({transitName:'text',firstName:'text',city:'text',dist:'text',teh:'text'})
module.exports=Transport
