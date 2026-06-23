import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

export default function Todo() {
    let [todos, setTodos] = useState([{task: "Go to the gym", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos)=>{
            return [...prevTodos,{task: newTodo, id: uuidv4(), isDone: false}]
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((prevTodos)=> prevTodos.id != id));
    }

    let markAsDone = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) =>{
            if(todo.id == id){
                return {...todo, isDone: true};
            }else{
                return todo;
            }
        }))
    }
    let markAllAsDone = () =>{
        setTodos((prevTodos) => prevTodos.map((todo) =>{
                return {...todo, isDone: true};
        }))

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
                        <span style = {todo.isDone ? {textDecorationLine: "line-through", textDecorationColor: "black"} : {}}>{todo.task}</span>
                        <button onClick={() => markAsDone(todo.id)}>
                            Mark as Done
                        </button>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>

                <button onClick={() => markAllAsDone()} style ={{ backgroundColor: "#4CAF50", color: "white", border: "none",marginLeft: "130px"}}>
                    Mark  all as Done
                </button>
        </div>
    );

}