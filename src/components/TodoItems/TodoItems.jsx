import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';

function TodoItems(props) {
    const { todos, toggleTodo, removeTodo } = props;
    return (
        <div>
            {todos.map((todo) => (
                <div
                    key={todo.id}
                    className={'mx-auto px-2 max-w-lg'}>
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

TodoItems.propTypes = {
    removeTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired
};

export default TodoItems;
