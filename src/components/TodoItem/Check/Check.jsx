import PropTypes from 'prop-types';
import { BsCheck } from 'react-icons/bs';

function Check(props) {
    const { isCompleted } = props;
    return (
        <div
            className={`border-2 rounded-lg border-pink-400 ${
                isCompleted ? 'bg-pink-400' : ''
            } w-7 h-7 mr-2`}>
            {isCompleted && (
                <BsCheck
                    size={24}
                    className={'text-gray-900 min-w-full'}
                />
            )}
        </div>
    );
}

Check.propTypes = {
    isCompleted: PropTypes.bool
};

export default Check;
