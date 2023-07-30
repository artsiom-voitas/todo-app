import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodoReducer, toogleTodoReducer } from '../../redux/todos/todosSlice';
import { Check, Notes, RemoveButton } from '../TodoItem';

function TodoItem({ id, title, isCompleted, note }) {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    function removeTodo() {
        dispatch(
            removeTodoReducer({
                id
            })
        );
    }

    function openTodo() {
        setIsOpen(!isOpen);
    }

    function toogleTodo() {
        dispatch(
            toogleTodoReducer({
                id
            })
        );
    }
    return (
        <div
            className={'flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'}>
            <button onClick={toogleTodo}>
                <Check isCompleted={isCompleted} />
            </button>
            <div
                className={`w-full text-left break-words break-all cursor-pointer ${
                    isCompleted ? 'line-through' : ''
                }`}>
                <div
                    onClick={openTodo}
                    className="sm:text-base text-sm">
                    {title}
                </div>
                <Notes
                    isOpen={isOpen}
                    id={id}
                    note={note}
                />
            </div>
            <RemoveButton action={removeTodo} />
        </div>
    );
}

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    note: PropTypes.string
};

export default TodoItem;
