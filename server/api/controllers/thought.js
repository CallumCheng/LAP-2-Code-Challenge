const Thought = require("../models/Thought");

async function create(req, res) {
  try {
    const { title } = req.body;
    const { author } = req.body;
    const { post } = req.body;

    const thought = await Thought.create({ title, author, post });
    console.log();
    res.status(201).json({
      thoughts: thought,
    });
  } catch (err) {
    res.status(422).json({
      error: err,
    });
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
