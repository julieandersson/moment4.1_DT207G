/* Routes för registrering och inloggning */

const express = require("express");
const router = express.Router();

// Lägg till ny användare
router.post("/register", async (req, res) => {
    console.log("Registrera...");
});

// Användare loggar in 
router.post("/login", async (req, res) => {
    console.log("Logga in...");
});

module.exports = router;