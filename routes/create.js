const Event = require("../models/user");
const router = require("express").Router();

///post new contacts or new user
router.post("/newevents", async (req, res) => {
  try {
    const { title, description, location, starttime, endtime } = req.body;
    let event = await Event.findOne({ title });
    if (event) {
      return res.status(400).json({ message: "event already exist" });
    }

    if (!title || !description || !location || !starttime || !endtime) {
      return res.status(400).json({ message: "Validation error !! provide all the fields " });
    }

    
    event = await Event.create({title, description, location, starttime, endtime });
    res.status(200).json({event});
  } catch (error) {
    res.json({
        status:"failed",
        message:error.message
    })
  }
});
  
///////get all events
router.get('/events', async(req,res)=>{
    const events = await Event.find();
    res.status(200).json({
        status:"success",
        events
    })
  });



module.exports=router;