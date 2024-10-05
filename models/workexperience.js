const mongoose = require("mongoose"); //Inkluderar mongoose

// Arbetserfarenheter - schema
const workExperienceSchema = new mongoose.Schema({
    companyname: {
        type: String, 
        required: true
    },
    jobtitle: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    startdate: {
        type: Date,
        required: true
    },
    enddate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

// Inkluderar schemat till databas med collection Workexperience
const Workexperience = mongoose.model("Workexperience", workExperienceSchema, "workexperience");
module.exports = Workexperience; // exporterar Workexperience