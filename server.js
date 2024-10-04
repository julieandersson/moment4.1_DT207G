/* Webbtjänst för registrering och inloggning */

// Inkluderar och använder express
const express = require("express");
const app = express();
app.use(express.json()); // Konvertering till json
// Inkluderar routes
const authRoutes = require("./routes/authRoutes");
//Routes
app.use("/api", authRoutes);
// Inkluderar dotenv
require("dotenv").config();

const port = process.env.PORT || 3001;

// Startar applikation
app.listen(port, () => {
    console.log("Server startad på port: " + port);
})