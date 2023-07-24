import { Schema, model } from "mongoose";

const userSchema=  new Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    mobile:{
        type: Number,
        required: true
    },
   
    password:{
        type:String,
        required: true,
    },
//pinal2520
},

          { timestamps: true, versionKey: false }
);

   export const userModel = model("user", userSchema);

   