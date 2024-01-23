const axios = require("axios")
const express = require("express")
const app = express()

const link = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=f96c0af131d8b461f71aa06be1cd2801"

app.get("/",async (req,res)=>{
    const response = await axios.get(link)
    res.send(response.data)
})












app.listen(8000,()=>{
    console.log('listening on port 8000')
})