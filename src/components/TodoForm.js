import React, { useState } from "react";
import { addNewTodo } from "../firebaseFunctions";

const TodoForm = () => {
    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewTodo(newTodo);
        setNewTodo("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-wrapper">
                <input className="form-input"
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Введите новую задачу..."
                />
                <button className="form-button" type="submit">Добавить</button>
            </div>
        </form>
    );
};

export default TodoForm;
