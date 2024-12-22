const mongoose = require("mongoose");

const Bought = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    house:{
        // id:{type:Number, required:true},
        Images: { type: [String], required: true },
        Address: { type: String, required: true },
        Price: { type: String, required: true },
        Bedrooms: { type: Number, required: true },
        Bathrooms: { type: Number, required: true },
        Ares: { type: String, required: true }, 
        AboutHome: { type: String, required: true },
    }
})

module.exports = mongoose.model('Bought', Bought);