const {employeeModel}=require("@npm_workspace/postcall");
const app=require("@npm_workspace/postcall/post");

// var express = require('express');  
// var app = express(); 


app.get('/get',async(req,res)=>{
    var data=await employeeModel().find({});
    res.send(data);
})

// app.listen(3000);
// console.log(app);

module.exports.app=app;

