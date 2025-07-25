function Book(title, author, isRead = false) {
  this.title = title;
  this.author = author;
  this.isRead = isRead;

  this.toggleReadStatus = function () {
    this.isRead = !this.isRead;
  };

  this.describe = function () {
    return `📖 "${this.title}" by ${this.author} [${
      this.isRead ? "Read" : "Unread"
    }]`;
  };
}

const book3 = new Book("The Hobbit", "J.R.R. Tolkien");
