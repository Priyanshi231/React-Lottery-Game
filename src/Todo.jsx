import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

export default function Todo() {
    let [todos, setTodos] = useState([{task: "Go to the gym", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos)=>{
            return [...prevTodos,{task: newTodo, id: uuidv4()}]
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((prevTodos)=> prevTodos.id != id));
    }
    
    return (
        <div className="todo-container">
            <div className="input-group">
                <input placeholder="Add a task" 
                 value = {newTodo} onChange={updateTodoValue}></input>
                <button onClick={addNewTask}>ADD</button>
            </div>
   
            <h2> Todo List </h2>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                        <span>{todo.task}</span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </li>
                    )) 
                }
            </ul>

        </div>
    )

}