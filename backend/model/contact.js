import mongoose from "mongoose";


const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 30,
    },
    phone: {
        type: String,
        required: true,
        maxLength: 12,
    },
    email: {
        type: String,
        required: true,
        maxLength: 50,
    },
    query: {
        type: String,
        required: true,
        maxLength: 500,
    },

},
    {
        timestamps: true
    }
)


export default mongoose.model('Contact',contactSchema)







