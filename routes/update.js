const Event = require("../models/user");
const router = require("express").Router();

router.put('/events/:id', async (req, res) => {
    try {
      const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      if (!updatedEvent) {
        return res.status(404).json({ message: 'There is no contact with that id' });
      }
    
      res.json(updatedEvent);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error / validation error:field can not be empty' });
    }
  });

  module.exports = router;