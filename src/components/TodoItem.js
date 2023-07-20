import React from "react";
import { updateTodoStatus, deleteTodo } from "../firebaseFunctions";

const TodoItem = ({ todo }) => {

    const handleCheckboxChange = () => {
        const newCompletedState = !todo.completed;
        updateTodoStatus(todo.id, newCompletedState);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleCheckboxChange}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.title}
            </span>
            <button className="form-button" onClick={() => deleteTodo(todo.id)}>
                Удалить
            </button>
        </div>
    );
};

export default TodoItem;
