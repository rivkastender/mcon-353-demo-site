import { CheckBox } from '@mui/icons-material';
import React, {useState} from 'react';

export const Todo = () => {

    const [input, setInput] = useState(""); 

    const [todos,setTodos] = useState([
        {
            title: "first",
            isComplete: false,
        },
        {
            title: "second",
            isComplete: true,
        },
    ]);


    const onInput = (event) => {
        console.log(event.target.value)
        setInput(event.target.value)
    }

    const addTodo = () => {
        setTodos([...todos, {title: input, isComplete: false}]);
        setInput("");
    }

    const toggleChecked = (todo) => {

    const newTodos = [...todos];
    const updateTodo = newTodos.find((x) => x.title === todo.title);
    updateTodo.isComplete = !todo.isComplete;
    
    setTodos(newTodos);

    console.log(todo);
    }

    return (
        <>
        <h1>Todos</h1>
        
        <input onInput={onInput} value = {input}/>
        <button onClick={addTodo}>Add</button>
        {todos.map((todo, index) => (
            <p key={index}>
                <input 
                    type="checkbox"
                    checked={todo.isComplete} 
                    onChange= {() => toggleChecked(todo)}
                />
                {todo.title}
            </p>
        ))}
        </>
    );

};