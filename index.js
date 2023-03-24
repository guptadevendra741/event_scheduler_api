const express =require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const db = require("./database/db");
const createevent = require("./routes/create");
const events = require("./routes/create");
const searchevents = require("./routes/search");
const deleteevents = require("./routes/delete");
const updateevent = require("./routes/update");




const app = express();
dotenv.config();
const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json({limit:"10mb"}));



app.use("/api", createevent);
app.use("/api", events);
app.use("/", searchevents);
app.use("/", deleteevents);
app.use("/", updateevent);


app.listen(5000, async ()=>{
    await db()
    console.log("server at port 5000");
})