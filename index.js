const express = require ("express");
const res = require("express/lib/response")
const mongoose = require ("mongoose")
const config = require('./server/config/default');
const fileUpload = require('express-fileupload');

const authRouter = require ("./server/routes/auth.routes.js")
const fileRouter = require ('./server/routes/file.routes.js')
const corsMiddleware = require('./server/middleware/cors.middleware')
const logger = require ('./server/middleware/logger.js');

const { db } = require ("./server/models/User.js");

const app = express();

const PORT = config.serverPort;
const dbUrl = config.dbUrl;

app.use(fileUpload({}))
app.use(corsMiddleware)
app.use(express.json({ extended: true }))
app.use(logger)
app.use("/api/auth", authRouter)
app.use("/api/files", fileRouter)

const start = async () => {
    try {
    //await mongoose.connect("mongodb+srv://agregator:cloud_password93@cloud-disk.uvdnf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    await mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true       
    })
    
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
