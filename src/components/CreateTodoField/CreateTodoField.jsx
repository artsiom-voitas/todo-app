import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

function CreateTodoField(props) {
    const { setTodos } = props;
    const [title, setTitle] = useState('');

    function addTodo(title) {
        if (title.length > 3) {
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
    }

    return (
        <div className={'mx-auto px-2 max-w-lg'}>
            <div className={'rounded-2xl bg-zinc-800 p-5 w-full sm:text-base text-sm mb-10 flex'}>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    maxLength={40}
                    className={'bg-transparent w-full border-none outline-none'}
                    placeholder="Add Task"
                />
                <button>
                    <IoIosAddCircleOutline
                        size={22}
                        className={
                            'text-pink-400 hover:text-red-600 transition-colors ease-in-out duration-300'
                        }
                        onClick={() => addTodo(title)}
                    />
                </button>
            </div>
        </div>
    );
}

CreateTodoField.propTypes = {
    setTodos: PropTypes.func.isRequired
};

export default CreateTodoField;
