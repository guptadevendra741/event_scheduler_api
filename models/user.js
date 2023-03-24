const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title:{type:String , required:true, minlength: [1, 'title required']},
    description:{type:String, required:true,minlength: [1, 'description required'],},
    location:{type:String, required:true,minlength: [1, 'location required']},
    starttime:{type:String, required:true,minlength: [1, 'start time is required']},
    endtime:{type:String, required:true,minlength: [1, 'endtime is required']},
});

const Event = mongoose.model("event",EventSchema);

module.exports = Event;