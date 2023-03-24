const mongoose = require('mongoose');
mongoose.set("strictQuery",false)
const db=()=>{
    mongoose.connect("mongodb+srv://enter your own url").then(()=>{
        console.log("database connected!!");
    });
}

module.exports = db;
