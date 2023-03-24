const mongoose = require('mongoose');
mongoose.set("strictQuery",false)
const db=()=>{
    mongoose.connect("mongodb+srv://guptadevendra7432:SyoQvmyFAeyqF3De@cluster0.bag01x1.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        console.log("database connected!!");
    });
}

module.exports = db;