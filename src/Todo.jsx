import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

export default function Todo() {
    let [todos, setTodos] = useState([{task: "Go to the gym", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos,{task: newTodo, id: uuidv4()}]);
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
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
                        <li key={todo.id}>{todo.task}</li>
                    )) 
                }
            </ul>

        </div>
    )

}