// styling
import styles from './styles.module.scss';

// utils
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Navigator = ({text, handler, prevDisabled, nextDisabled, className, ...props}) => {
    return (
        <div className={`${styles.container} ${className ? className : ''} navigator`} {...props}>
            <button className={classNames(styles.button, {[styles.disabled]: prevDisabled})}
                    onClick={handler}
                    data-direction="prev"
                    aria-label="Previous">
                <i className="icon icon-chevron-left"></i>
            </button>
            <span className={`${styles.label} text-12`}>{text}</span>
            <button className={classNames(styles.button, {[styles.disabled]: nextDisabled})}
                    onClick={handler}
                    data-direction="next"
                    aria-label="Next">
                <i className="icon icon-chevron-right"></i>
            </button>
        </div>
    )
}

Navigator.propTypes = {
    text: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
    prevDisabled: PropTypes.bool,
    nextDisabled: PropTypes.bool,
    className: PropTypes.string
}

export default Navigator;