import db from "./firebaseConfig";
import firebase from "firebase/compat/app";

export const addNewTodo = async (newTodo) => {
    try {
        await db.collection("todos").add({
            title: newTodo,
            completed: false,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    } catch (error) {
        console.error("Ошибка при добавлении задачи:", error);
    }
};

export const updateTodoStatus = async (todoId, completed) => {
    try {
        await db.collection("todos").doc(todoId).update({
            completed: completed,
        });
    } catch (error) {
        console.error("Ошибка при обновлении статуса задачи:", error);
    }
};

export const deleteTodo = async (todoId) => {
    try {
        await db.collection("todos").doc(todoId).delete();
    } catch (error) {
        console.error("Ошибка при удалении задачи:", error);
    }
};
