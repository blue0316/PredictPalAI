// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// components
import Spring from '@components/Spring';
import MatchEventText from '@ui/MatchEventText';
import MatchProgress from '@ui/MatchProgress';
import MatchTrack from '@ui/MatchTrack';
import Score from '@ui/Score';

// hooks
import useMeasure from 'react-use-measure';

// utils
import PropTypes from 'prop-types';

const StyledItem = styled.div`
  background: var(--tooltip-bg);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  border-left: 4px solid ${props => `var(--${props.color1})`};
  border-right: 4px solid ${props => `var(--${props.color2})`};
  box-shadow: 0 1px 8px rgba(110, 110, 110, .1);
  overflow: hidden;

  .main {
    padding: 15px 10px;
    
    // iPhone XR
    @media screen and (min-width: 414px) {
      padding: 30px;
    }
  }
  
  &.active {
    min-height: calc(220px + var(--widget-scale));
    height: 100%;
  }

  .match {
    padding: var(--card-padding);
    background: ${theme('theme', {
      light: 'transparent',
      dark: 'rgba(17,19,18, .4)'
    })};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .player-number {
    border-color: ${theme('theme', {
      light: 'var(--border)',
      dark: 'var(--black-3)'
    })};
  }
`;

const MatchResultColorItem = ({match, index, type = 'group', standalone = false}) => {
    const [ref, {width}] = useMeasure();

    const events = [
        {type: 'goal', minute: 32},
        {type: 'substitution', minute: 50, count: 4},
    ]

    return (
        <Spring className="h-100" type={standalone ? 'fade' : 'slideUp'} index={index}>
            <StyledItem className={match.active ? 'active' : ''} color1={match.team1.color} color2={match.team2.color}>
                <div className="main d-flex align-items-center justify-content-between">
                    {
                        type === 'group' ?
                            <>
                                <div className="d-flex align-items-center g-14">
                                    <span className="player-number h3">
                                        {match.team1.score}
                                    </span>
                                    <div>
                                        <h3>{match.team1.countryCode}</h3>
                                        <span className="text-12">Group {match.group}</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center g-14">
                                    <div className="text-right">
                                        <h3>{match.team2.countryCode}</h3>
                                        <span className="text-12">Group {match.group}</span>
                                    </div>
                                    <span className="player-number h3">
                                        {match.team1.score}
                                    </span>
                                </div>
                            </>
                            :
                            <>
                                <div>
                                    <h3>{match.team1.club}</h3>
                                    <span className="text-12">{match.team1.country}</span>
                                </div>
                                <Score team1={match.team1.score} team2={match.team2.score} variant="alt"/>
                                <div className="text-right">
                                    <h3>{match.team2.club}</h3>
                                    <span className="text-12">{match.team2.country}</span>
                                </div>
                            </>
                    }
                </div>
                {
                    match.active && (
                        <div className="match p-relative flex-1" ref={ref}>
                            <MatchProgress currentMinute={55} containerWidth={width}/>
                            <div className="d-flex flex-column g-8">
                                <MatchEventText minute={72} text=""/>
                                <MatchTrack events={events}/>
                            </div>
                        </div>
                    )
                }
            </StyledItem>
        </Spring>
    )
}

MatchResultColorItem.propTypes = {
    match: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['group', 'final']),
    standalone: PropTypes.bool
}

export default MatchResultColorItem