const express = require('express');
const app = express();
const port=3000;

app.use(express.json());
const booksRouter=require("./router/router")
const userRouter=require("./router/UserRouter")


app.use("/books",booksRouter)
app.use("/users",userRouter)


app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);



