// server.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let storedHTML = ""; // Variable to store the user's HTML input

// Serve the HTML file
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Route to store the user's HTML input
app.post("/store-html", (req, res) => {
    const userHTML = req.body.html;
    // Sanitize userHTML if needed

    storedHTML = userHTML;
    res.redirect("/");
});

// Route to retrieve the stored HTML
app.get("/get-html", (req, res) => {
    res.send(storedHTML);
});

app.listen(3000, () => console.log("Server started on http://localhost:3000"));
