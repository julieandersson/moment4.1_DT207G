/* Routes för registrering och inloggning */

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("dotenv").config();

// Ansluter till MongoDB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE).then(() => {
    console.log("Ansluten till MongoDB.")
}).catch ((error) => {
    console.error("Något gick fel vid anslutning av MongoDB.");
});

// Lägg till ny användare
router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validera input
        if(!username || !password) {
            return res.status(400).json({error: "Ogiltigt input, ange både användarnamn och lösenord"});
        }

        // Vid korrekt input - spara användare
        res.status(201).json({ message: "Användare skapad."});

    } catch (error) {
        res.status(500).json({ error: "Server error"});
    }
});

// Användare loggar in 
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validera input
        if(!username || !password) {
            return res.status(400).json({error: "Ogiltigt input, ange både användarnamn och lösenord"});
        }

        // Kontrollera inloggningsuppgifter
        if (username === "Julie" && password === "lösenord") {
            res.status(200).json({message: "Inloggningen lyckades."});
        } else {
            res.status(401).json({ error: "Ogiltigt användarnamn eller lösenord."});
        }


    } catch (error) {
        res.status(500).json({ error: "Server error"});
    }
});

module.exports = router;