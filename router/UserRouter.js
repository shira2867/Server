const express = require('express');
const router = express.Router();
const { generateToken } = require('../utils/utils.js');



const users = [{ username: "shira", password: "1234" }];
let activeTokens = [];

router.get("/", (_, res) => res.send("Server up"));

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return res.status(401).json({ error: "שם משתמש או סיסמה שגויים" });
  }

  const token = generateToken(40);
  activeTokens.push(token);
  res.json({ token });
});

router.post("/logout", (req, res) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(400).json({ error: "Token missing" });
  activeTokens = activeTokens.filter(t => t !== token);
  res.json({ message: "Logged out successfully" });
});


router.get("/users", (_, res) => res.json(users));

module.exports = router;