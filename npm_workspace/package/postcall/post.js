var {employeeModel} = require("./index")

var express = require('express');  
var app = express(); 

app.use(express.json())

app.post('/post',async(req,res)=>{
    // var data=await lambdaHandler().find({});
    // var value=JSON.parse(req.body)
    var user=employeeModel();
    var new_employee = new user({
        name: req.body.name,
        role: req.body.role
    })

    if(!new_employee.name || !new_employee.role)
    {
        res.status(400).send("missing body")
    }

    // await new_employee.save();
    else{
        res.send("data inserted");
    }
    


})

app.listen(3000);

module.exports=app;
