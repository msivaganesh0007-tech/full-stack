const express = require("express");

const app = express();

const PORT = 3000;


// -----------------------------
// Custom Logging Middleware
// -----------------------------

function requestLogger(req, res, next) {

    const currentTime = new Date().toLocaleString();

    console.log(
        `${currentTime} - ${req.method} ${req.url}`
    );

    // Pass control to the next middleware/route
    next();
}


// Use middleware
app.use(requestLogger);


// -----------------------------
// Routes
// -----------------------------

app.get("/", function(req, res) {

    res.send(`
        <h1>Express.js Middleware</h1>
        <p>Welcome to the application.</p>
        <p>Check the terminal to see the request log.</p>
    `);

});


app.get("/students", function(req, res) {

    res.json([
        {
            id: 1,
            name: "Rahul"
        },
        {
            id: 2,
            name: "Priya"
        },
        {
            id: 3,
            name: "Arjun"
        }
    ]);

});


app.get("/about", function(req, res) {

    res.send(`
        <h1>About</h1>
        <p>This application demonstrates Express.js middleware.</p>
    `);

});


// -----------------------------
// Start Server
// -----------------------------

app.listen(PORT, function() {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});
