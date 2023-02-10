const express=require("express");
const fetch = require('node-fetch');
const routes=require("./route");
const app=express();

const PORT=8080;

// app.get("/",async(req,res)=>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();

//     console.log(data);
//     res.send(data)
// });

app.use("/user",routes);

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})