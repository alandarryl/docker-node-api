
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) =>{
    res.send("Docker is working");
});

app.get("/time", (req, res) =>{
    res.json({ time: new Date() });
});

app.get("/name/:name", (req, res) =>{
    res.send(`Hello ${req.params.name}`);
});


app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});

