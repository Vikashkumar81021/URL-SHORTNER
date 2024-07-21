import mongoose from 'mongoose'

const urlSchema=new mongoose.Schema({
shortid:{
    type:String,
    required:true,
    unique:true
},
redirectUrl:{
    type:String,
    required:true
},
visitHistory:[{
    timestap:{type:Number}
}],

},{timestamps:true})

export const   Url=mongoose.model("Url",urlSchema)