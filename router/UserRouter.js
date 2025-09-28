const express=require("express");
const router = express.Router();




let users = [
  { username: 'shira', password: '1234' }
];


router.get('/', (req, res) => {
  res.json({ ok: true, message: 'Hello from Express server 👋' });
});




router.get('/user', (req, res) => {
    res.json(users);
});

module.exports=router;