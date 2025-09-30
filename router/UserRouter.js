const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { generateToken,} = require('../utils/utils.js');
const {addToken,removeToken}=require('../services/token.js')
const{isAuthorized}= require('../router/middlewere.js')  ;




const hashed = bcrypt.hashSync("1234", 10);
const users = [{ username: "shira", password: hashed }];
let activeTokens = [];

router.get("/", (_, res) => res.send("Server up"));

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // בדיקה אם משתמש קיים
    const existing = users.find(u => u.username === username);
    if (existing) return res.status(400).json({ error: "User already exists" });

    // hash לסיסמה
    const hashedPassword = await bcrypt.hash(password, 4);
    const newUser = { username, password: hashedPassword };
    users.push(newUser);
    console.log("users",users)
   

    res.status(201).json({ message: 'User registered', user: { username ,hashedPassword} });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) return res.status(401).json({ error: "שם משתמש או סיסמה שגויים" });

    // השוואת סיסמה עם bcrypt
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "שם משתמש או סיסמה שגויים" });

    const token = generateToken(40);
    addToken(token);

    res.json({ message: "Login successful", token, user: { username } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post('/logout', isAuthorized, (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    removeToken(token);
    res.json({ msg: "Logged out" });
})


router.get("/", (_, res) => res.json(users));

module.exports = router;