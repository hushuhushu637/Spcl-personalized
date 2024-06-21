// import { comparePassword } from "../helper/authHelper";
import userModel from "../model/userModel.js";
import bcrypt from 'bcrypt';
import { comparePassword } from "../helper/authHelper.js";
import Jwt from 'jsonwebtoken';
import contact from '../model/contact.js'


export const registerController = async (req, res) => {
    try {
        const { name, email, password,confirmPassword} = req.body;

        //validation
        if (!name || !email || !password || !confirmPassword) {
            return res.send({
                error: "All fields are required"
            })
        }

        //check-existing user

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "User already exists"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // const hashPassword = await hashPassword(password)
        //save
        const user = await new
            userModel({
                name,
                email,
                password: hashPassword,
                confirmPassword:hashPassword
                
            }).save();

        res.status(201).send({
            success: true,
            message: "User Register successfully",

            user
        })

    } catch (error) {
        console.log("Error in registerController ", error);
        res.status(500).send({
            success: false,
            message: "Error in registerController",
            error,
        })

    }
}



export const loginController = async (req, res) => {
    try {

        const { email, password } = req.body;

        //validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password"
            })
        }
        //check user exist or not

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not Registered",

            })
        }

        const match = await comparePassword(password, user.password);

        if (!match) {
            return res.status(404).send({
                success: false,
                message: "Invalid password",
            })
        }

        //token

        const token = await Jwt.sign({ _id: user._id },
            process.env.JWT_SECRET,

            { expiresIn: "7d" }

        )
        res.status(200).send({
            success:true,
            message:"Login successfully",
            user:{
                name: user.name,
                email: user.email,
               
                role:user.role,

            },
            token
       

        })


    } catch (error) {
        console.log("Error in LoginController ", error);
        res.status(500).send({
            success: false,
            message: "Error in LoginController",
            error,
        })

    }
}




export  const createContact = async (req, res) => {
    try {

        const { name, phone, email, query } = req.body;

        if (!name || !email || !phone || !query) {
           
                return res.status(404).json({
                    success: false,
                    msg: "All fields are required"
                })
          
        }

        const response =  await contact.create({name,phone,email,query});


        // _____________________________________________OR____________________________________

        // const newUser = new contact({name,phone,email,query});
        // await newUser.save();

        res.status(200).json({
            success: true,
            data:response,
            msg: "Contact created successfully",
        })

    } catch (error) {
        console.log("Error in Create Contact controller" + error);
        res.status(404).json({
            success: false,
            msg: "Something went wrong While creating contact",
            message: error.message
        })

    }
}




export const getContactDetails = async(req,res)=>{
    try {

        const response = await contact.find({});
        if(!response){
            return res.status(404).json({
                success: false,
                msg: "No Contact user Found",
            })
        }

       return res.status(200).json({
            success: true,
           response,
            msg: "Contact Details",
        })
        
    } catch (error) {
        console.log("Error in Get Contact controller" + error);
        return res.status(404).json({
            success: false,
            message:"Something went wrong in Contact get  controller",
        })
        
    }
}


