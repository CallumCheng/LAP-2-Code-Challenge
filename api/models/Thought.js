const db = require("../dbconfig/init");
const path = require("path");

class Thought {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.author = data.author;
    this.post = data.post;
  }

  static async create(data) {
    // ✅✅✅
    try {
      const { title, author, post } = data;

      const newThought = await db.query(
        "INSERT INTO thought (title, author, post) VALUES ($1, $2, $3) RETURNING *;",
        [title, author, post]
      );
      const thought = new Thought(newThought.rows[0]);

      console.log(thought);
      console.log("Posts recieved!✅");
      return thought;
    } catch (err) {
      console.error(err);
    }
  }

  static async findById(id) {
    // ✅✅✅
    const data = await db.query("SELECT * FROM thought WHERE id = $1;", [id]);
    const thought = new Thought(data.rows[0]);

    console.log(id, thought);
    if (!thought.id) {
      throw new Error("No posts found");
    }
    return thought;
  }
}

module.exports = Thought;
