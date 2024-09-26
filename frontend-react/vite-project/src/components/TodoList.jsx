import React, { useState, useEffect, useContext } from "react";
import axios from "../axiosConfig";
import todoListImg from "../assets/images/todoListImg.svg";
import featureImgMedia from "../assets/images/featureImgMedia.png";
import LoggedInContext from "../context/LoggedInContext";
import { Navigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [userId, setUserId] = useState(null);
  const { LoggedIn, setLoggedIn } = useContext(LoggedInContext);
  const [selectedTasks, setSelectedTasks] = useState([]);

  useEffect(() => {
    const getUserId = async () => {
      try {
        const response = await axios.get(axios.defaults.baseURL+"/api/auth/authMiddleware"
        );
        if (response.status === 200) {
          const user = response.data;
          setUserId(user.id);
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (error) {
        console.error(error);
        setLoggedIn(false);
      }
    };

    getUserId();
  }, []);

  useEffect(() => {
    if (userId) {
      axios
        .get(axios.defaults.baseURL+`/api/todos?userId=${userId}`)
        .then((response) => {
          setTodos(response.data.sort((a, b) => a.completed - b.completed));
        })
        .catch((error) => {
          console.error("There was an error fetching the todos!", error);
        });
    }
  }, [userId]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() && userId) {
      axios
        .post(axios.defaults.baseURL+"/api/todos", { title: newTodo, userId })
        .then((response) => {
          setTodos(
            [...todos, response.data].sort((a, b) => a.completed - b.completed)
          );
          setNewTodo("");
        })
        .catch((error) => {
          console.error("There was an error adding the todo!", error);
        });
    }
  };

  const handleDeleteSelected = (e) => {
    e.preventDefault();
    if (selectedTasks.length > 0 && userId) {
      axios
        .delete(axios.defaults.baseURL+"/api/todos/multiple", {
          data: { ids: selectedTasks, userId },
        })
        .then(() => {
          setTodos(todos.filter((todo) => !selectedTasks.includes(todo.id)));
          setSelectedTasks([]);
        })
        .catch((error) => {
          console.error("There was an error deleting the todos!", error);
        });
    }
  };

  const handleDoneSelected = (e) => {
    e.preventDefault();
    if (selectedTasks.length > 0 && userId) {
      axios
        .put(axios.defaults.baseURL+"/api/todos/multiple", {
          ids: selectedTasks,
          userId,
        })
        .then(() => {
          const updatedTodos = todos.map((todo) =>
            selectedTasks.includes(todo.id)
              ? { ...todo, completed: true }
              : todo
          );
          setTodos(updatedTodos.sort((a, b) => a.completed - b.completed));
          setSelectedTasks([]);
        })
        .catch((error) => {
          console.error("There was an error updating the todos!", error);
        });
    }
  };

  const handleChange = (event) => {
    const { value, checked } = event.target;
    setSelectedTasks((prevSelectedTasks) =>
      checked
        ? [...prevSelectedTasks, parseInt(value)]
        : prevSelectedTasks.filter((task) => task !== parseInt(value))
    );
  };

  const handleSelectAll = (e) => {
    e.preventDefault();
    setSelectedTasks(todos.map((todo) => todo.id));
  };

  const handleDeselectAll = (e) => {
    e.preventDefault();
    setSelectedTasks([]);
  };

  return LoggedIn ? (
    <div className="bg-[#1eb8b9] min-h-screen flex flex-col md:flex-row justify-center p-4">
      <form
        className="bg-[#eee] rounded-3xl shadow-xl w-full md:w-[60vw] p-6 mb-4 md:mb-0 md:mr-4 "
        //TODO: add gradient bg-gradient-to-r from-[#fff] to-[#a6a6a6]
        onSubmit={handleAddTodo}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <img src={featureImgMedia} alt="Todo List" className="h-11" />
            <h1 className="text-2xl md:text-4xl font-bold overflow-hidden">
              Todo list
            </h1>
          </div>
          {selectedTasks.length > 0 && (
            <div className="flex gap-4">
              <button className="text-red-500" onClick={handleDeleteSelected}>
                <i className="fas fa-trash-alt"></i>
              </button>
              <button className="text-green-500" onClick={handleDoneSelected}>
                <i className="fas fa-check"></i>
              </button>
            </div>
          )}
        </div>
        <div className="mt-4 pb-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add new todo"
            className="border p-2 w-full rounded"
          />
          <button
            className="bg-blue-500 text-white p-2 rounded mt-2 w-full"
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>
        <div className="space-y-2">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`flex gap-2 items-center p-2 rounded ${
                todo.completed ? "bg-green-100" : "bg-gray-200"
              }`}
            >
              <input
                type="checkbox"
                name="tasks"
                value={todo.id}
                checked={selectedTasks.includes(todo.id)}
                onChange={handleChange}
                className="checkbox-custom"
              />
              <label htmlFor="tasks">{todo.title}</label>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button
            className="bg-yellow-500 text-white p-2 rounded"
            onClick={handleSelectAll}
          >
            Select All
          </button>
          <button
            className="bg-gray-500 text-white p-2 rounded"
            onClick={handleDeselectAll}
          >
            Deselect All
          </button>
        </div>
      </form>
      <div className="w-full md:w-[40vw]">
        <Tilt>
          <img
            src={todoListImg}
            alt="Todo illustration"
            className="object-cover w-full rounded-lg"
          />
        </Tilt>
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default TodoList;
