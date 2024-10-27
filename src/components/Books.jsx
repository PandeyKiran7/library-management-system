import { useState } from "react";
import "./styles/Books.css";

function Books() {
  const [books, setBooks] = useState([
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [alert, setAlert] = useState(false); // State for alert
  const [editMode, setEditMode] = useState(false);
  const [currentBookId, setCurrentBookId] = useState(null);

  const handleSearch = () => {
    return books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleAddBook = () => {
    if (newBook.title && newBook.author) {
      const newId = books.length + 1;
      setBooks([...books, { id: newId, ...newBook }]);
      setNewBook({ title: "", author: "" });
      setAlert(true); // Show alert

      setTimeout(() => setAlert(false), 3000); // Hide alert after 3 seconds
    }
  };

  const handleEditBook = (book) => {
    setEditMode(true);
    setCurrentBookId(book.id);
    setNewBook({ title: book.title, author: book.author });
  };

  const handleSaveEdit = () => {
    setBooks(books.map(book =>
      book.id === currentBookId ? { ...book, ...newBook } : book
    ));
    setEditMode(false);
    setNewBook({ title: "", author: "" });
    setCurrentBookId(null);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="books-container">
      <h1>Manage Books</h1>

      {/* Alert Message */}
      {alert && <div className="alert">Book added successfully!</div>}

      {/* Search Section */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <ul className="book-list">
        {handleSearch().map((book) => (
          <li key={book.id} className="book-item">
            <span>{book.title} by {book.author}</span>
            <button onClick={() => handleEditBook(book)} className="edit-button">
              Edit
            </button>
            <button onClick={() => handleDeleteBook(book.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Add/Edit Book Form */}
      <div className="add-book-form">
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <button
          onClick={editMode ? handleSaveEdit : handleAddBook}
          className="add-book-button"
          disabled={!newBook.title || !newBook.author} // Disable if fields are empty
        >
          {editMode ? "Save Changes" : "Add Book"}
        </button>
      </div>
    </div>
  );
}

export default Books;
