import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAHowareteYnG6UGNIZnCnogfERXHL84ek",
    authDomain: "todolist-project-a8222.firebaseapp.com",
    databaseURL: "https://todolist-project-a8222-default-rtdb.firebaseio.com",
    projectId: "todolist-project-a8222",
    storageBucket: "todolist-project-a8222.appspot.com",
    messagingSenderId: "507457500982",
    appId: "1:507457500982:web:23c80d4a4944d76f0fa597"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
