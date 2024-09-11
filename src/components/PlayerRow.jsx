// styling
import styled from 'styled-components/macro';

// components
import Spring from '@components/Spring';
import LazyImage from '@components/LazyImage';
import {StyledRow} from '@components/TeamScoreRow';
import {ReactComponent as SubstitutionIcon} from '@assets/icons/substitution.svg';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// utils
import PropTypes from 'prop-types';

const StyledPlayerRow = styled(StyledRow)`
  &.ltr .media img {
    border-left: 4px solid var(--red);
  }

  &.rtl .media img {
    border-right: 4px solid var(--red);
  }

  .media img[data-captain="true"] {
    border-color: var(--turquoise);
  }
  
  .main {
    padding: 0 8px;
    border: 1px solid var(--border);
    background: transparent;

    .icon {
      animation: rotate-center 3s ease-in-out infinite;
    }
  }
`;

const PlayerRow = ({player, index}) => {
    const {direction} = useThemeProvider();

    return (
        <Spring index={index} type="slideUp">
            <StyledPlayerRow className={`${direction} reverse label h6`}>
                <div>
                    <LazyImage className="media" src={player.avatar} alt={player.name} data-captain={player.isCaptain}/>
                </div>
                <div className="main d-flex align-items-center justify-content-between">
                    {player.name} ({player.number})
                    {player.substitutes && <SubstitutionIcon className="icon"/>}
                </div>
            </StyledPlayerRow>
        </Spring>
    )
}

PlayerRow.propTypes = {
    player: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
}

export default PlayerRow