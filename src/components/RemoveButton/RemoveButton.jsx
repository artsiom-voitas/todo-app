import PropTypes from 'prop-types';
import { BsTrash } from 'react-icons/bs';

function RemoveButton(props) {
    const { action } = props;
    return (
        <button>
            <BsTrash
                size={22}
                className={
                    'text-pink-400 hover:text-red-600 transition-colors ease-in-out duration-300 ml-3'
                }
                onClick={action}
            />
        </button>
    );
}

RemoveButton.propTypes = {
    action: PropTypes.func.isRequired
};

export default RemoveButton;
