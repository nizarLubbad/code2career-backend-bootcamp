const book1 = {
  title: "1984",
  author: "George Orwell",
  isRead: false,

  toggleReadStatus() {
    this.isRead = !this.isRead;
  },

  describe() {
    return `📖 "${this.title}" by ${this.author} [${
      this.isRead ? "Read" : "Unread"
    }]`;
  },
};
