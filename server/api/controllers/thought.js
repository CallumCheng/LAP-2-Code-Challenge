const Thought = require("../models/Thought");

async function create(req, res) {
  try {
    const title = req.body.title;
    const author = req.body.author;
    const post = req.body.post;

    const thought = await Thought.create({ title, author, post });

    res.status(201).json(thought);
  } catch (err) {
    res.status(422).json({
      error: err,
    });
  }
}
