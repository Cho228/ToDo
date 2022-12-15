import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxO03fo6JX976sAAk2ERvU8bVxT16Qt50",
  authDomain: "control-work-todo-list.firebaseapp.com",
  projectId: "control-work-todo-list",
  storageBucket: "control-work-todo-list.appspot.com",
  messagingSenderId: "983211004893",
  appId: "1:983211004893:web:323a6959796c7e2ab85c34",
  measurementId: "G-GGNTTQT3SV",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

// Get a list of films from your database
async function getTodos(database) {
  const todosCol = collection(database, 'Todos');
  const todosSnapshot = await getDocs(todosCol);
  const todosList = todosSnapshot.docs.map(doc => doc.data());

  return todosList;
}
  
export const todoList = getTodos(database);
export const storage = getStorage(app);