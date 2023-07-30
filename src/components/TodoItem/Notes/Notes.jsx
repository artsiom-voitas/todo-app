import { animate, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addNoteReducer } from '../../../redux/todos/todosSlice';

function Notes({ id, isOpen, note }) {
    const dispatch = useDispatch();

    function setNote(text) {
        dispatch(
            addNoteReducer({
                id,
                note: text
            })
        );
    }

    return (
        <motion.div onClick={() => animate('.boxes', { opacity: 0 })}>
            {isOpen && (
                <input
                    type="text"
                    onChange={(e) => {
                        setNote(e.target.value);
                    }}
                    value={note}
                    placeholder="Write something..."
                    className={
                        'bg-transparent w-full border-none outline-none text-sm text-gray-300'
                    }
                />
            )}
        </motion.div>
    );
}

Notes.propTypes = {
    id: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    note: PropTypes.string
};

export default Notes;
