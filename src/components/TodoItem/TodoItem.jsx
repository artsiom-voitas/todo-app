import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeTodoReducer, toogleTodoReducer } from '../../redux/todos/todosSlice';
import RemoveButton from '../RemoveButton';
import Check from './Check/';

function TodoItem(props) {
    const { id, title, isCompleted } = props;
    const dispatch = useDispatch();

    function removeTodo() {
        dispatch(
            removeTodoReducer({
                id
            })
        );
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
            <button
                className={'flex items-center sm:text-base text-sm text-left break-words'}
                onClick={toogleTodo}>
                <Check isCompleted={isCompleted} />
                <div className={isCompleted ? 'break-all line-through' : 'break-all'}>{title}</div>
            </button>
            <RemoveButton action={removeTodo} />
        </div>
    );
}

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired
};

export default TodoItem;
