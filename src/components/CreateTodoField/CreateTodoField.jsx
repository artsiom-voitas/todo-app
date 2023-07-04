import { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodoReducer } from '../../redux/todos/todosSlice';

function CreateTodoField() {
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();
    const unique_id = uuidv4();

    function addTodo() {
        if (title.length > 3) {
            dispatch(
                addTodoReducer({
                    todo: title,
                    id: unique_id
                })
            );
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
                    className={'bg-transparent w-full border-none outline-none'}
                    placeholder="Add Task"
                />
                <button>
                    <IoIosAddCircleOutline
                        size={22}
                        className={
                            'text-pink-400 hover:text-red-600 transition-colors ease-in-out duration-300 ml-3'
                        }
                        onClick={addTodo}
                    />
                </button>
            </div>
        </div>
    );
}

export default CreateTodoField;
