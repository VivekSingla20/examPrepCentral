const db = require("../models");
const { User } = db;

exports.createTodo = async (req, res) => {
  const { title, userId } = req.body;
  try {
    const tableName = `user_${userId}`;
    const TodoModel = db.getTodoModel(tableName);
    const newTodo = await TodoModel.create({ title });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getTodos = async (req, res) => {
  const { userId } = req.query;
  try {
    const tableName = `user_${userId}`;
    const TodoModel = db.getTodoModel(tableName);
    const todos = await TodoModel.findAll();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { completed, userId } = req.body;
  try {
    const tableName = `user_${userId}`;
    const TodoModel = db.getTodoModel(tableName);
    const todo = await TodoModel.findByPk(id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    await todo.update({ completed });
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id, userId } = req.params;
  try {
    const tableName = `user_${userId}`;
    const TodoModel = db.getTodoModel(tableName);
    const todo = await TodoModel.findByPk(id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    await todo.destroy();
    res.status(200).json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateMultipleTodos = async (req, res) => {
  console.log("updateMultipleTodos route hit");
  const { ids, userId } = req.body;
  try {
    const tableName = `user_${userId}`;
    const TodoModel = db.getTodoModel(tableName);
    
    const updatedTodos = await TodoModel.update(
      { completed: true },
      {
        where: {
          id: ids
        }
      }
    );
    res.status(200).json({ message: "Todos updated", updatedTodos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteMultipleTodos = async (req, res) => {
  const { ids, userId } = req.body;
  try {
    const tableName = `user_${userId}`;
    const TodoModel = db.getTodoModel(tableName);

    const deletedTodos = await TodoModel.destroy({
      where: {
        id: ids
      }
    });

    res.status(200).json({ message: "Todos deleted", deletedTodos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
