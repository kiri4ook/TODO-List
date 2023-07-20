import React, { useState, useEffect } from 'react';
import db from "./firebaseConfig";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './App.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("todos")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        const todosData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTodos(todosData);
      });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Todo List</h1>
          <TodoList todos={todos} />
          <TodoForm />
        </div>
      </header>
    </div>
  );
}

export default TodoApp;

