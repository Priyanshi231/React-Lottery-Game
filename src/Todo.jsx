import {useState} from 'react';

export default function Todo() {
    let [todos, setTodos] = useState(["sample task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos,newTodo]);
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }
    
    return (
        <>
            <input placeholder="Add a task" 
             value = {newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addNewTask}>ADD</button>
   
            <h2> Todo List </h2>
            <ul>
                {
                    todos.map((todo) => (
                        <li>{todo}</li>
                    )) 
                }
            </ul>

        </>
    )

}