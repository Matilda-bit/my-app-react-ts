import React, {useState} from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.models';

function App() {
  const [todos, setTodos] = useState<Todo[]>([{id: 't1', text: 'test React with TypeScript'}]);

  const addNewTodo = (todoText: string) => {
      setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: todoText}]);
  }
  const deleteTodo = (todoId: string) => {
    setTodos( prevTodos => {
      return prevTodos.filter( todo => (todo.id !== todoId));
    });
  }
  
  return (
    <div className="App">
      <NewTodo addNewTodo={addNewTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
