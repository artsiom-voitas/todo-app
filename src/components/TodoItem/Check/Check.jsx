import PropTypes from 'prop-types';
import { BsCheck } from 'react-icons/bs';

function Check(props) {
    const { isCompleted } = props;
    return (
        <div
            className={`border-2 rounded-lg border-pink-400 w-7 min-w-max h-7 mr-2 ${
                isCompleted ? 'bg-pink-400' : ''
            } `}
            style={{ minWidth: '28px' }}>
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
    isCompleted: PropTypes.bool.isRequired
};

export default Check;
