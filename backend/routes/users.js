const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:GFidtnZiHCQ7b46J@cluster0.2isyv0j.mongodb.net/DevConvo")

const schema = mongoose.Schema({
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

},{timestamps: true})

module.exports = mongoose.model("registrations", schema)