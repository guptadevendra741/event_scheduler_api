const Event = require("../models/user");
const router = require("express").Router();

//get a specific event through id
router.get("/events/:id", async(req,res)=>{
    try {
        const event = await Event.findOne({_id:(req.params.id)})
        if(!event){
            return res.status(404).json({
                status:"failed",
                message:"there is no event with this id"
            })
        }

        res.status(200).json({
            status:"success",
            event
        })
    } catch (error) {
        res.status(404).json({
            status:"failed",
            message:"there is no event with this id"
        })
    }
})


module.exports = router