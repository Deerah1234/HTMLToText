const express = require("express");
const shortid = require("shortid");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// In-memory data store to store the converted HTML and short links
const htmlData = {};

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/convert", (req, res) => {
    const htmlInput = req.body.html_content;
    const shortLink = shortid.generate();

    // Store the HTML content and its short link in the data store
    htmlData[shortLink] = htmlInput;

    // Return the short link as JSON response
    res.json({ short_link: shortLink });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
