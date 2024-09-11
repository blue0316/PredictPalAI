// components
import Grow from '@mui/material/Grow';

// utils
import PropTypes from 'prop-types';

const AddFormContainer = ({children, open}) => {
    return (
        <div style={{maxHeight: open ? '100%' : '0px', transition: 'all ease-in-out 300ms'}}>
            <Grow in={open} timeout={400}>
                {children}
            </Grow>
        </div>
    )
}

AddFormContainer.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool.isRequired
}

export default AddFormContainer