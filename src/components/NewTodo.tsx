import React, {useRef} from 'react';
import './NewTodo.css';


type NewTodoProps = {
    addNewTodo: (todoText: string) => void;
}
const NewTodo:  React.FC<NewTodoProps> = ({addNewTodo}) =>  {
    const textInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
       
        console.log(enteredText);
        addNewTodo(enteredText);
    }

    return <div>
        <form  onSubmit={handleSubmit}>
            <div className='todo-text'>
                <label htmlFor="todo-text">Todo text</label>
                <input type="text" id="todo-text" ref={textInputRef}/>   
            </div>
            <button type="submit" className='add-btn'> Add Todo</button>
        </form>
    </div>;
}

export default NewTodo;