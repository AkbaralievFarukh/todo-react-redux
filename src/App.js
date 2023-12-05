import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTodos} from "./redux/action/todoAction";

const App = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState({});
    const todosArray = useSelector((state) => state.todos)

    useEffect(() => {
        dispatch(getTodos(todos));
    },[])

    const handleAddTodo = () => {
        const data = {
            id: todosArray.length + 1, title: todo.title, completed:false
        }
    }

    return (
        <div>
            <input
                type={'text'}
                onChange={(e) => setTodo({...todo, title: e.target.value})}
            >

            </input>
            {
                todosArray.map(todo => (
                    <div key={todo.id} style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                        <h3>{todo.title}</h3>
                        <input type="checkbox" checked={todo.completed}/>
                    </div>
                ))
            }
        </div>
    );
};

export default App;

const todos = [
    {
        id: 1,
        title: 'Todo 1',
        completed: false
    },
    {
        id: 2,
        title: 'Todo 2',
        completed: true
    },
    {
        id: 3,
        title: 'Todo 3',
        completed: false
    },
    {
        id: 4,
        title: 'Todo 4',
        completed: true
    }
]