import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem';

function TodoItems() {
    const todos = useSelector((state) => state['todos']);

    return (
        <div>
            {todos.map((todo) => (
                <div
                    key={todo.id}
                    className={'mx-auto px-2 max-w-lg'}>
                    <TodoItem
                        id={todo.id}
                        title={todo.title}
                        isCompleted={todo.isCompleted}
                    />
                </div>
            ))}
        </div>
    );
}

export default TodoItems;
