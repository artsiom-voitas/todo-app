import { useState } from 'react';
import CreateTodoField from '../CreateTodoField/';
import TodoItem from '../TodoItem/';

const data = [
    {
        id: 0,
        title: 'Finish the essay',
        isCompleted: false
    },
    {
        id: 1,
        title: 'Read the essay',
        isCompleted: false
    },
    {
        id: 2,
        title: 'Send feedback for the project',
        isCompleted: true
    }
];

function Home() {
    const [todos, setTodos] = useState(data);

    function toggleTodo(id) {
        const todosCopy = [...todos];
        const currentTodo = todosCopy.find((todo) => todo.id === id);
        currentTodo.isCompleted = !currentTodo.isCompleted;
        setTodos(todosCopy);
    }

    function removeTodo(id) {
        setTodos([...todos].filter((todo) => todo.id !== id));
    }

    return (
        <div className={'mb-20'}>
            <h1 className={'sm:text-2xl text-xl font-bold mb-10 text-center'}>Your To-Do List</h1>
            <CreateTodoField setTodos={setTodos} />
            {todos.map((todo) => (
                <div
                    key={todo.id}
                    className={'mx-auto px-2 max-w-md'}>
                    <TodoItem
                        todo={todo}
                        toggleTodo={toggleTodo}
                        removeTodo={removeTodo}
                    />
                </div>
            ))}
        </div>
    );
}

export default Home;
