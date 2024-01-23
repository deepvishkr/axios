const axios = require('axios');
const express = require("express")
const app = express()

// JSONPlaceholder API endpoint URL for posts
const jsonPlaceholderUrl = 'https://jsonplaceholder.typicode.com/posts/1';


// OpenWeatherMap API endpoint URL for weather data (replace 'YOUR_API_KEY' with your actual API key)
const openWeatherMapUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=f96c0af131d8b461f71aa06be1cd2801';


app.get("/",async(req,res)=>{
  try{
  
  let [weather,json] = await Promise.all([
    await axios.get(jsonPlaceholderUrl),
    await axios.get(openWeatherMapUrl)
  ])

  res.send({
    w:weather.data,
    j:json.data
  })
}
catch(err){
  console.log(err)
}



})

















// app.get("/",async(req,res)=>{
//    try{
//     let [weather,jsonn] = await Promise.all([
//       await axios.get(jsonPlaceholderUrl),
//       await axios.get(openWeatherMapUrl),
//     ])
//     res.send({
//       weatherr:weather.data,
//       json:jsonn.data,
     
//     })
//    }

//    catch(err){
//         console.log(err)
//    }
// })

// app.get("/",async(req,res)=>{
//     try {
    
//         const [weather,jsonn] = await Promise.all([
//             await axios.get(openWeatherMapUrl),
//             await axios.get(jsonPlaceholderUrl)
//         ])
//         res.send({
//            weatherData: weather.data,
//            jsonData:jsonn.data
//         })
//         //console.log('JSONPlaceholder API Response:', response.data);
//       } catch (error) {
//         console.error('Error fetching data from JSONPlaceholder API:', error.message);
//       }
//     }
    
// )

app.listen(1000,()=>{
    console.log("listening on port 1000")
})

