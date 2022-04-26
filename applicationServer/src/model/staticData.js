var mongoose=require('mongoose')
var staticData = {
    id:Number,
    sellerName: {
        type: String,
        default: 'Hari Priya Globle Enterprises Pvt Ltd Nimrani'
    },
    GSTSeller: {
        type: String,
        trim: true,
        toUpperCase: true,
        require: true,
        default: '23AADCH7419J1ZK'
    },

    mobileSeller: {
        type: Number,
        maxlength: [10, 'Must be at most 10, got {VALUE}'],
        minlength: [10, 'Must be at least 10, got {VALUE}'],
        trim: true,
        default: 6269902268
    },
    emailSeller: {
        type: String,
        default: 'manoj@haripriyagrp.com'
    },

    streetAddSeller: {
        type: String,
        default: 'Plot No 191/3 Old AB Road Nimrani'
    },
    citySeller: {
        type: String,
        require: true,
        trim: true,
        lowerCase: true,
        default: 'Nimrani'
    },
    tehSeller: {
        type: String,
        require: true,
        trim: true,
        lowerCase: true,
        default: 'Kasarawad'
    },
    distSeller: {
        type: String,
        require: true,
        trim: true,
        lowerCase: true,
        default: 'Khargone'
    },

    pinSeller: {
        type: Number,
        minlength: [6, 'Must be at least 6, got {VALUE}'],
        maxlength: [6, 'Must be at most 6, got {VALUE}'],
        default: 451660
    },
    stateSeller: {
        type: String,
        require: true,
        trim: true,
        lowerCase: true,
        default: 'Madhya Paresh'
    },
    stateCodeSeller: {
        type: Number,
        require: true,
        default: 23
    },
    countrySeller: {
        type: String,
        default: 'India'
    },
    bankName: {
        type: String,
    },
    branchName: {
        type: String,
        trim: true,
    },
    AccountNum: {
        type: Number,
    },
    ifsCode: {
        type:Number,
    },
    panNum: {
        type: String,
    },
    aadharNum: {
        type: String,
    }
}

//var StaticData=new mongoose.model('StaticData',staticData)
module.exports=new mongoose.Schema(staticData)
module.exports.staticData=staticData