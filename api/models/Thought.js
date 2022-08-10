const db = require("../dbConfig");
const path = require("path");

class Thought {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.author = data.author;
    this.post = data.post;
  }

  static async create(data) {
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
}

module.exports = Thought;
