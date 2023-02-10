// const date = require('date-and-time');
// const now  =  new Date(); 
  
// // Formatting the date and time 
// // by using date.format() method 
// const value = date.format(now,'YYYY/MM/DD HH:mm:ss'); 
  
// // Display the result 
// console.log("current date and time : " + value) 

const mongoose = require('mongoose');

mongoose.set('strictQuery', true)

        var mongoAtlasUri="mongodb+srv://raju:raju@cluster0.d55ipzc.mongodb.net/demo?retryWrites=true&w=majority"

        try {
            // Connect to the MongoDB cluster
            mongoose.connect(
            mongoAtlasUri,
            { useNewUrlParser: true, useUnifiedTopology: true },
            () => console.log(" Mongoose is connected")
            );

        } catch (e) {
            console.log("could not connect");
        }

        var skillSchema = new mongoose.Schema({
            name: String,
            role: String,
        });
        // const skillSchema = new mongoose.Schema({}, { strict: false })

        // var thingSchema = new mongoose.Schema({..}, { strict: false });


// mongoose.set('strictQuery', true)

// mongoose.set('strictQuery', true)

module.exports.employeeModel = () => {
    
        var User = mongoose.model('Employee', skillSchema,'Employee');

        return User
    }

// lambdaHandler()

// var us=lambdaHandler().find({});
// us.then((val)=>{
//     console.log(val)
// })

// users.then(async(val)=>{
//     var us= await val.find({});
//     console.log(us);
// });