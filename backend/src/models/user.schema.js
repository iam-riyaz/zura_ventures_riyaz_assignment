import mongoose from "mongoose";

const uploadSchema= new mongoose.Schema({
  name:{type:String},
  description:{type:String}
})

const projectSchema= new mongoose.Schema({
projectName:{type:String},
uploads:{type:[uploadSchema],default:[]}

})

const userSchema= new mongoose.Schema({
    email:{type:String, required:true},
    projects:{type:[projectSchema],default:[]},
    
}) 


 export const User=mongoose.model("ZuraUser", userSchema)