import PropTypes from 'prop-types';

Layout.propTypes = {
    children: PropTypes.element
};

function Layout(props) {
    const { children } = props;
    return (
        <div className={'bg-gray-900 min-h-screen'}>
            <div className={'py-10 text-white container mx-auto'}>{children}</div>
        </div>
    );
}

export default Layout;
