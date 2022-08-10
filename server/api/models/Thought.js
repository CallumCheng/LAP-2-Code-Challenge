const fsp = require("fs").promises;
const path = require("path");

class Thought {
  constructor(data) {
    this.title = data.title;
    this.author = data.author;
    this.post = data.post;
  }

  static async create(data) {
    try {
      const thought = new Thought(data);
      const thoughtData = JSON.stringify(thought);

      console.log(thoughtData);
      // create file
      await fsp.writeFile(
        path.join(__dirname, "..", "..", "db", "newThought.json"),
        thoughtData
      );
      if (path.join(__dirname, "..", "..", "db", "newThought.json") == true) {
        console.log(true);
      }

      // create thoughts object
      const thoughts = { thoughts: thought };
      console.log(thoughts);

      // write data to file
      // await fsp.appendFile(
      //   path.join(__dirname, "..", "..", "db", "thoughts.json"),
      //   thoughts
      // );
      //

      console.log("Posts recieved!✅");
      return thought;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = Thought;
