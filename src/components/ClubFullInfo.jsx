// components
import SubmenuButton from '@ui/SubmenuButton';
import Submenu from '@ui/Submenu';
import TruncatedText from '@components/TruncatedText';

// hooks
import useSubmenu from '@hooks/useSubmenu';
import {useWindowSize} from 'react-use';
import useMeasure from 'react-use-measure';

// utils
import PropTypes from 'prop-types';

const ClubFullInfo = ({club, country, isCompact}) => {
    const [nameRef, {width}] = useMeasure();
    const {anchorEl, open, handleClick, handleClose} = useSubmenu();
    const isSmallScreen = useWindowSize().width < 414;
    const isIconOnly = isSmallScreen || isCompact;

    const submenuActions = [
        {
            label: 'Share',
            icon: 'share',
        },
        {
            label: 'Follow',
            icon: 'follow',
        }
    ]

    return (
        <div className="d-flex flex-column g-20">
            <div className="club_header d-flex align-items-center g-14">
                <img className="club-logo" src={club.logo} alt={club.name}/>
                <div className="club_header-main d-flex flex-column g-10 w-100" ref={nameRef}>
                    <TruncatedText className="h2" text={club.shortName || club.name} lines={1} width={width}/>
                    <span className="text-12">{club.city}, {country || club.country}</span>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <div className={`d-flex ${isIconOnly ? 'g-8' : 'g-16'}`}>
                    <a className={`tag tag--social h6 ${isIconOnly ? 'compact' : ''}`}
                       style={{backgroundColor: '#3b5998'}}
                       href="https://www.facebook.com"
                       target="_blank"
                       rel="noopener noreferrer"
                       aria-label="Facebook"
                    >
                        {isIconOnly ? <i className="icon icon-facebook-f"/> : 'Facebook'}
                    </a>
                    <a className={`tag tag--social h6 ${isIconOnly ? 'compact' : ''}`}
                       style={{backgroundColor: '#1da1f2'}}
                       href="https://www.twitter.com"
                       target="_blank"
                       rel="noopener noreferrer"
                       aria-label="Twitter"
                    >
                        {isIconOnly ? <i className="icon icon-twitter"/> : 'Twitter'}
                    </a>
                    <a className={`tag tag--social h6 ${isIconOnly ? 'compact' : ''}`}
                       style={{backgroundColor: '#ff0000'}}
                       href="https://www.youtube.com"
                       target="_blank"
                       rel="noopener noreferrer"
                       aria-label="Youtube"
                    >
                        {isIconOnly ? <i className="icon icon-youtube"/> : 'Youtube'}
                    </a>
                </div>
                <SubmenuButton onClick={handleClick}/>
                <Submenu anchorEl={anchorEl} open={open} onClose={handleClose} actions={submenuActions}/>
            </div>
        </div>
    )
}

ClubFullInfo.propTypes = {
    club: PropTypes.object.isRequired,
    country: PropTypes.string,
}

export default ClubFullInfo