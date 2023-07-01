import { useEffect, useState } from 'react';
import { getTodos } from '../../services/getTodos';
import CreateTodoField from '../CreateTodoField/';
import TodoItems from '../TodoItems';

function Home() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        getTodos(setTodos);
        return () => {};
    }, []);

    function toggleTodo(id) {
        const todosCopy = [...todos];
        const currentTodo = todosCopy.find((todo) => todo.id === id);
        currentTodo.completed = !currentTodo.completed;
        setTodos(todosCopy);
    }

    function removeTodo(id) {
        setTodos([...todos].filter((todo) => todo.id !== id));
    }

    return (
        <div className={'mb-20'}>
            <h1 className={'sm:text-2xl text-xl font-bold mb-10 text-center'}>Your To-Do List</h1>
            <CreateTodoField setTodos={setTodos} />
            <TodoItems
                todos={todos}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
            />
        </div>
    );
}

export default Home;
