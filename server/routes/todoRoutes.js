const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.post("/", todoController.createTodo);
router.get("/", todoController.getTodos);
router.put("/:id", todoController.updateTodo);
router.delete("/:id/:userId", todoController.deleteTodo);

// New route for updating multiple todos
router.put("/multiple", todoController.updateMultipleTodos);

// New route for deleting multiple todos
router.delete("/multiple", todoController.deleteMultipleTodos);

module.exports = router;
