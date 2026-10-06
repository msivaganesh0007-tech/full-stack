const express = require("express");

const app = express();

const PORT = 3000;

// Home route
app.get("/", function(req, res) {
    res.send(`
        <h1>Student Management Server</h1>
        <p>Welcome to the Student Management Application.</p>
        <p>Available routes:</p>
        <ul>
            <li>/</li>
            <li>/students</li>
            <li>/about</li>
        </ul>
    `);
});

// Students data
const students = [
    {
        id: 1,
        name: "Rahul",
        department: "CSE"
    },
    {
        id: 2,
        name: "Priya",
        department: "AI & ML"
    },
    {
        id: 3,
        name: "Arjun",
        department: "ECE"
    },
    {
        id: 4,
        name: "Sneha",
        department: "IT"
    },
    {
        id: 5,
        name: "Kiran",
        department: "AI & DS"
    }
];

// Students route
app.get("/students", function(req, res) {
    res.json(students);
});

// About route
app.get("/about", function(req, res) {
    res.send(`
        <h1>About Application</h1>
        <p>This is a basic Express.js Student Management Server.</p>
        <p>It demonstrates routing and HTTP GET requests.</p>
    `);
});

// Start server
app.listen(PORT, function() {
    console.log(`Server running at http://localhost:${PORT}`);
});
