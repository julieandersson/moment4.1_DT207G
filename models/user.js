/* js-fil med "regler" för användare */

const mongoose = require("mongoose"); // Inkluderar mongoose
const bcrypt = require("bcrypt"); // Inkluderar bcrypt 

// Användar-schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

// Hasha lösenord, körs innan save
userSchema.pre("save", async function(next) {
    try {
        if(this.isNew || this.isModified("password")) {
            const hashedPassword = await bcrypt.hash(this.password, 10);
            this.password = hashedPassword;
        }
        next();
    } catch(error) {
        next(error);
    }
});

