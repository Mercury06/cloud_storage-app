const express = require ("express");
const res = require("express/lib/response")
const mongoose = require ("mongoose")
//var config = require('config');
const router = require ("./routes/auth.routes.js")

const { db } = require ("./models/User.js");

const app = express()
PORT = 3000;
app.use(express.json())
app.use("/api/auth", router)

const start = async () => {
    try {

    await mongoose.connect("mongodb+srv://agregator:cloud_password93@cloud-disk.uvdnf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
       
    app.get ("/", (req, res) => {
        res.send('Some text');
    })

    app.listen(PORT, () => {
        console.log ('Server started on port:', PORT)
    })
    } catch (e) {
        console.log("catched from app", e)
    }
}

start ()

// netstat -ano | findstr :5000
// taskkill /PID 8616 /F
