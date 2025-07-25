class LibraryItem {
  static nextID = 1;
  #id;

  constructor(title, year) {
    this.title = title;
    this.year = year;
    this.#id = LibraryItem.generateID();
  }

  static generateID() {
    return this.nextID++;
  }

  describe() {
    return `📚 "${this.title}" (${this.year}) - ID: ${this.#id}`;
  }

  getID() {
    return this.#id;
  }
}

class Book extends LibraryItem {
  #isRead;

  constructor(title, year, author, isRead = false) {
    super(title, year);
    this.author = author;
    this.#isRead = isRead;
  }

  toggleReadStatus() {
    this.#isRead = !this.#isRead;
  }

  describe() {
    const status = this.#isRead ? "Read" : "Unread";
    return `📖 "${this.title}" by ${this.author} (${this.year}) - ${status}`;
  }

  isRead() {
    return this.#isRead;
  }
}

const book1 = new Book("1984", 1949, "George Orwell", true);
const book2 = new Book("The Hobbit", 1937, "J.R.R. Tolkien");

console.log(book1.describe());
book2.toggleReadStatus();
console.log(book2.describe());
