/* Webbtjänst för registrering och inloggning */

// Inkluderar och använder express
const express = require("express");
const app = express();

// Inkluderar dotenv
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.json()); // Konvertering till json

// Startar applikation
app.listen(port, () => {
    console.log("Server startad på port: " + port);
})