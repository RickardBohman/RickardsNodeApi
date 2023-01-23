
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const https = require("https")

const instrument = {instruments:[
    {"Name": "Guitarr", "Kind": "Sting instrument"},
    {"Name": "Piano", "Kind": "PlingPlong Instrument"},
    {"Name": "Violin", "Kind": "Stroke Instrument"}
]}


app.get("/joke", (req,res) => {
    https.get("https://api.chucknorris.io/jokes/random", (response)=>{
    response.on("data",(data)=>{
        res.send(JSON.parse(data))
        })
    }).on("Error", (err)=>{
        console.log("There Was an error " + err.message)
    })
})


app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/instruments",(req,res)=> {
    res.send(instrument)
})




app.listen(PORT, ()=>{
    console.log("Listening to " + PORT)
})