import PropTypes from 'prop-types';
import Check from './Check.jsx';
import { BsTrash } from 'react-icons/bs';
function TodoItem(props) {
    const { todo, toggleTodo, removeTodo } = props;
    return (
        <div
            className={'flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'}>
            <button
                className={'flex items-center'}
                onClick={() => toggleTodo(todo.id)}>
                <Check isCompleted={todo.isCompleted} />
                <span className={todo.isCompleted ? 'line-through' : ''}>{todo.title}</span>
            </button>
            <button>
                <BsTrash
                    size={22}
                    className={
                        'text-pink-400 hover:text-red-600 transition-colors ease-in-out duration-300'
                    }
                    onClick={() => removeTodo(todo.id)}
                />
            </button>
        </div>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
};

export default TodoItem;
