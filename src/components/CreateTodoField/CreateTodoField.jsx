import { useState } from 'react';
import PropTypes from 'prop-types';

CreateTodoField.propTypes = {
    setTodos: PropTypes.func
};

function CreateTodoField(props) {
    const { setTodos } = props;
    const [title, setTitle] = useState('');

    function addTodo() {
        setTodos((prev) => [
            {
                id: new Date(),
                title,
                isCompleted: false
            },
            ...prev
        ]);
        setTitle('');
    }

    return (
        <div className="mx-4">
            <div
                className={
                    'flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full mt-32'
                }>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    onKeyDown={(e) => e.key === 'Enter' && addTodo(title)}
                    className={'bg-transparent w-full border-none outline-none'}
                    placeholder="Add Task"
                />
            </div>
        </div>
    );
}

export default CreateTodoField;
