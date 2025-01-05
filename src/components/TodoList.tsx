import React from 'react';
import './TodoList.css';


interface TodoListProps {
    todos: {id: string, text: string}[];
    deleteTodo: (id: string)=> void;
}

const TodoList: React.FC<TodoListProps> = ({todos, deleteTodo}) => {
    return (
    <ul>
        {todos.map(todo => (
        <li key={todo.id}>
            <span>{todo.text}</span>
            <button className='delete-btn' onClick={deleteTodo.bind(null,todo.id)}>DELETE</button>
        </li>
        ))}

    </ul>
    );
}

export default TodoList;