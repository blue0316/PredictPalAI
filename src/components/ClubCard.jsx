// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// components
import ClubFullInfo from '@components/ClubFullInfo';
import Spring from '@components/Spring';

// hooks
import {useWindowSize} from 'react-use';

// utils
import PropTypes from 'prop-types';

const Container = styled.div`
  background: ${theme('theme', {
    light: 'var(--widget)',
    dark: 'var(--border)'
  })};
  position: relative;
  height: 220px;
  padding: var(--card-padding);
  box-shadow: var(--widget-shadow);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  .club_header {
    flex-direction: column;
    align-items: flex-start;
    
    &-main {
      gap: 4px;
    }
  }
  
  .num {
    position: absolute;
    font-size: 227px;
    font-family: var(--heading-font);
    font-weight: 900;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    ${theme('theme', {
        light: `
            color: #282828;
            opacity: 0.03;
        `,
        dark: `
            color: #111312;
            opacity: 0.12;
        `
    })};
  }
`;

const ClubCard = ({country, club, index}) => {
    const width = useWindowSize().width;

    return (
        <Spring type="slideUp" index={index}>
            <Container>
                <ClubFullInfo club={club} country={country} isCompact={width < 1024 || (width >= 1500 && width < 2000)}/>
                <span className="num">{index + 1}</span>
            </Container>
        </Spring>
    )
}

ClubCard.propTypes = {
    country: PropTypes.string.isRequired,
    club: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default ClubCard