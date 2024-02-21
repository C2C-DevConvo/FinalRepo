import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
    
    name : {
        type: String,
        required: true
    },

    number: {
        type: Number,
        required: true
    },

    mail: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    organization: {
        type: String,
        required: true
    },

    designation: {
        type: String,
        required: true
    },

    linkedin: {
        type: String
    },

    twitter: {
        type: String
    }

}, {timestamps: true})

const Registration = mongoose.model('Registration', registrationSchema);

export default Registration;