const express=require("express");
const router = express.Router();

let books = [
  { id: 1, title: 'Book One', author: 'Alice' },
  { id: 2, title: 'Book Two', author: 'Bob' },
  { id: 3, title: 'Book Three', author: 'Carol' }
];





router.get('/', (req, res) => {
  res.json({ ok: true, message: 'Hello from Express server 👋' });
});


// 1. Get all books
router.get('/books-list', (req, res) => {
  res.json(books);
});



module.exports=router;