// styling
import styles from './styles.module.scss';

// components
import LazyImage from '@components/LazyImage';

// utils
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LeagueHeader = ({img, title, subtitle, variant = 'full'}) => {
    const Title = variant === 'full' ? 'h2' : 'h3';
    const titleClass = variant === 'full' ? 'text-20' : '';

    return (
        <div className="d-flex align-items-center g-20">
            <LazyImage className={classNames(styles.media, {[styles.compact]: variant !== 'full'})}
                       src={img}
                       alt="media"/>
            <div className="d-flex flex-column g-4">
                <Title className={titleClass}>{title}</Title>
                {(subtitle && variant === 'full') && <span className="text-12">{subtitle}</span>}
            </div>
        </div>
    )
}

LeagueHeader.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.any.isRequired,
    subtitle: PropTypes.string,
    variant: PropTypes.oneOf(['compact', 'full']),
    titleWidth: PropTypes.string
}

export default LeagueHeader