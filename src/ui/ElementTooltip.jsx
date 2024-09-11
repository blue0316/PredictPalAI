// components
import Tooltip from '@mui/material/Tooltip';

// utils
import PropTypes from 'prop-types';
import {tooltipClasses, styled} from '@mui/material';

const StyledTooltip = styled(({className, ...props}) => (
    <Tooltip {...props} classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'var(--tooltip-bg)',
        color: 'var(--header)',
        boxShadow: '0 2px 16px rgba(75, 85, 110, 0.2)',
        fontSize: 12,
        maxWidth: 150,
        borderRadius: 4,
        marginTop: '4px !important',
        fontFamily: 'var(--heading-font)',
    },
}));

const ElementTooltip = ({children, title, placement = 'bottom'}) => {
    return (
        <StyledTooltip title={title} placement={placement}>
            {children}
        </StyledTooltip>
    )
}

ElementTooltip.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.any.isRequired,
    placement: PropTypes.oneOf(['top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end', 'left-start', 'left', 'left-end'])
}

export default ElementTooltip