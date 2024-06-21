
import mongoose from "mongoose";
import  dotenv  from 'dotenv';

dotenv.config();

 const dbConnect=()=>{
    // env process ke andar kaise feed hoga iske liye npm i dotenv install
    mongoose.connect(process.env.DATABASE_URL,{
        // useNewUrlParser:true,
        // useUnifiedTopology:true 
    })
    .then(()=>{
        console.log("DB connection established successfully");
    })
    .catch((err)=>{
        console.log("Issue in db connection failed: " + err);

        console.error(err.message);
        process.exit(1);
    })

}


export default dbConnect;

// module.exports = dbConnect;










