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
            <h2>Todo List</h2>
            <div className="input-group">
                <input 
                    type="text"
                    placeholder="Add a task" 
                    value={newTodo} 
                    onChange={updateTodoValue}
                    onKeyPress={(e) => e.key === 'Enter' && addNewTask()}
                />
                <button onClick={addNewTask}>ADD</button>
            </div>
   
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={{
                            textDecorationLine: todo.isDone ? "line-through" : "none",
                            textDecorationColor: todo.isDone ? "black" : "transparent",
                            opacity: todo.isDone ? 0.6 : 1
                        }}>
                            {todo.task}
                        </span>
                        <button onClick={() => markAsDone(todo.id)}>
                            Mark Done
                        </button>
                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            <button className="mark-all-button" onClick={() => markAllAsDone()}>
                Mark All as Done
            </button>
        </div>
    );

}