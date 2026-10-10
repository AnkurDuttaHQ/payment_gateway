import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        index:true
    },
    amount:{
        type:Number,
        required:true,
        index:true,
        min:1
    },

    currency:{
        type:String,
        default:"INR",
        enum:["INR"]

    },

    status:{
        type:String,
        enum:["created","failed","paid"],
        default:"created"
    },

    razorpayid:{
        
    },
    razorpayPaymentId:{

    },

    paidAt:{

    }
},
{timestamps:true}
)
