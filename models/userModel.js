// Modelo de Producto
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        
    },
    email: {
        type: String,
        required: true,
        trim:true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
        }, 
    },
    )

const User = mongoose.model('User', userSchema);

export default mongoose.model('User', userSchema)