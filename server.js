/* Webbtjänst för registrering och inloggning */

// Inkluderar och använder express
const express = require("express");
const app = express();
app.use(express.json()); // Konvertering till json

//Inkluderar och använder cors för att tillåta alla domäner
const cors = require("cors");
app.use(cors()); 

// Inkluderar routes
const authRoutes = require("./routes/authRoutes");
const jwt = require("jsonwebtoken"); // Inkluderar jsonwebtoken
const Workexperience = require("./models/workexperience");

// Inkluderar dotenv
require("dotenv").config();

const port = process.env.PORT || 3001;

//Routes
app.use("/api", authRoutes);

// Skyddad route
app.get("/api/workexperience", authenticateToken, async (req, res) => {
    try {
        // Hämtar arbetserfarenheter från databasen
        const result = await Workexperience.find({});
        // Kontroll om det finns någon data i databasen
        if (result.length === 0) {
            // Meddelande om inget data finns i databasen
            return res.status(404).json({ message: "Inga arbetserfarenheter hittades." });
        } else {
            // Returnerar erfarenheter
            return res.json(result);
        }
        // Om fel
    } catch (error) {
        console.error("Fel vid hämtning av arbetserfarenheter: ", error);
        // Returnera statuskod tillsammans med fel
        return res.status(500).json(error);
    }
});

// Validera token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Token
    // Om användaren har åtkomst till sidan
    if(token == null) res.status(401).json({ message: "Nekad åtkomst, token saknas."});

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, username) => {
        if(err) return res.status(403).json({ message: "Ogiltig JWT. "});

        req,username = username;
        next();
    })
}

// Startar applikation
app.listen(port, () => {
    console.log("Server startad på port: " + port);
})