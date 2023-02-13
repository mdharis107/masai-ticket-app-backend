const express  = require("express")


const app = express()

app.get("/",(req,res)=>{
    res.send("This is the Home Page")
})

app.listen(8080)