const Event = require("../models/user");
const router = require("express").Router();

router.delete('/events/:id', async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(204).json();
  } catch (err) {
    console.error(err);
    res.status(204).json({ message: 'Server error' });
  }
});

module.exports = router;