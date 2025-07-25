function createBook(title, author, isRead = false) {
  return {
    title,
    author,
    isRead,

    toggleReadStatus() {
      this.isRead = !this.isRead;
    },

    describe() {
      return `📖 "${this.title}" by ${this.author} [${
        this.isRead ? "Read" : "Unread"
      }]`;
    },
  };
}

const book2 = createBook("To Kill a Mockingbird", "Harper Lee");
