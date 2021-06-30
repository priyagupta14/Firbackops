const makeModifyTodoCall = ({ getTodos }, req) => {
  console.log(getTodos);

  let todo = getTodos;
  todo.author = 'John Doe';

  return todo;
};

module.exports = { makeModifyTodoCall };
