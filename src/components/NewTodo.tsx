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
            <div className='form-control'>
                <label htmlFor="todo-text">Input a New Todo</label>
                <input type="text" id="todo-text" ref={textInputRef}/>   
            </div>
            <button type="submit" className='add-btn'> Add Todo</button>
        </form>
    </div>;
}

export default NewTodo;