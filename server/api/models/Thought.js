class Thought {
  constructor(data) {
    this.title = data.title;
    this.author = data.author;
    this.post = data.post;
  }

  static async create(data) {}
}
