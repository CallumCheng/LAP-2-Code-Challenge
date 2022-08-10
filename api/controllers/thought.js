const Thought = require("../models/Thought");

async function create(req, res) {
  try {
    const { title } = await req.body;
    const { author } = await req.body;
    const { post } = await req.body;

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
    const thought = await Thought.findById(req.params.id);
    res.status(200).json(thought);
  } catch (err) {
    res.status(404).json({ err });
  }
}

// async function show(req, res) {
//   try {
//     const thought = await thought.findByURL(req.params)
//   }
// }

module.exports = {
  create,
};
