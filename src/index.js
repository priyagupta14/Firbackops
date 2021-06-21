const express = require('express');
const env = require('dotenv');

const { allTodosRouter, todoByIdRouter, createTodoRouter, getStockRouter } = require('./routes');

env.config();
const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.use('/allTodos', allTodosRouter);
app.use('/todoById', todoByIdRouter);
app.use('/createTodo', createTodoRouter);
app.use('/getStock', getStockRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
