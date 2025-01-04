import React from 'react';


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
            <button onClick={deleteTodo.bind(null,todo.id)}>Delete</button>
        </li>
        ))}

    </ul>
    );
}

export default TodoList;