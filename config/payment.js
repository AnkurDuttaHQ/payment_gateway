import Razorpay from 'razorpay';
import dotenv from 'dotenv';

dotenv.config();

if(!process.env.RAZORPAY_KEY || process.env.RAZORPAY_KEY_SECRET){
    throw new Error("Razorpay env variable is missing")
    
}

const razorpay = ({
    key_id:process.env.RAZORPAY_KEY,
    key_secret:process.env.RAZORPAY_KEY_SECRET
});

export default razorpay;
