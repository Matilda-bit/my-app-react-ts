import React, {useState} from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState([{id: 't1', text: 'test React with TypeScript'}]);

    const addNewTodo = (todoText: string) => {
    
        console.log(todoText);
        setTodos([...todos, {id: 't2', text: todoText}]);
    }
  
  return (
    <div className="App">
      <NewTodo addNewTodo={addNewTodo}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
