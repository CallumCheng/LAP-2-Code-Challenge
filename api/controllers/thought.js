const Thought = require("../models/Thought");

async function create(req, res) {
  try {
    const { title } = req.body;
    const { author } = req.body;
    const { post } = req.body;

    const thought = await Thought.create({ title, author, post });

    res.status(201).json({
      thoughts: thought,
    });
  } catch (err) {
    res.status(422).json({
      error: err,
    });
  }
}

async function show(req, res) {
  try {
    const id = req.params.id;
    const thought = await Thought.findById(id);
    res.status(200).json(thought);
  } catch (err) {
    res.status(404).json({ message: "id not found" });
  }
}

module.exports = {
  create,
  show,
};
