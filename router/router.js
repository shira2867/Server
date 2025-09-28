// const express = require('express');
// const router = express.Router();

// let books = [
//   { id: 1, title: 'Book One', author: 'Alice' },
//   { id: 2, title: 'Book Two', author: 'Bob' },
//   { id: 3, title: 'Book Three', author: 'Carol' }
// ];

// router.get('/books-list', (req, res) => {
//   res.json(books);
// });

// router.post('/books', (req, res) => {
//   const newBook = { id: books.length + 1, ...req.body };
//   books.push(newBook);
//   res.json(newBook);
// });

// module.exports = router;
const express = require('express');
const router = express.Router();

let books = [
  { id: 1, title: 'Book One', author: 'Alice' },
  { id: 2, title: 'Book Two', author: 'Bob' },
  { id: 3, title: 'Book Three', author: 'Carol' }
];

// GET כל הספרים
router.get('/', (req, res) => {
  res.json(books);
});

// POST ספר חדש
router.post('/', (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.json(newBook);
});

module.exports = router;
