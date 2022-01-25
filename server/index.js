const express = require ("express")
//const res = require("express/lib/response")
const mongoose = require ("mongoose")
//var config = require('config');
const authRouter = require ("./routes/auth.routes")

const app = express()
//const PORT = config.get('serverPort')
const PORT = 5000;
//console.log("This data from config:", serverPort)
console.log("This data from config:", PORT)

//app.use("/api/auth", authRouter)

const start = async () => {
    try {
        //await mongoose.connect(config.get("dbUrl"))
        //await mongoose.connect(config.get("mongodb+srv://agregator:cloud_password93@cloud-disk.uvdnf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"))

        app.listen (PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {
        console.log(e)
        //res.send({message: "Server error"})
    }
}

start()
// app.get("/", (req, res) => {  
//     // res.write("Hello")
//     // res.end()
//     res.send("shows only First Line")
//     res.send("won't show second Line")
// }

// )

// app.listen(PORT, () => {console.log('Server started on port ', PORT)})