// styling
import styled from 'styled-components/macro';

// components
import Progress from '@ui/Progress';

// utils
import PropTypes from 'prop-types';

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  .label {
    line-height: 1 !important;
  }

  .progressbar {
    height: ${props => props.barHeight}px;
    width: 6px;

    .MuiLinearProgress-bar {
      transform: translateY(${props => 100 - props.value}%) !important;
    }
  }
`

const LabeledProgress = ({label, value, barHeight = 110, barColor = 'azure', trackColor}) => {
    return (
        <ListItem value={value} barHeight={barHeight}>
            <Progress value={value} barColor={barColor} trackColor={trackColor}/>
            <h6 className="label">{label}</h6>
        </ListItem>
    );
}

LabeledProgress.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    value: PropTypes.number.isRequired,
    barHeight: PropTypes.number,
    barColor: PropTypes.string,
    trackColor: PropTypes.string,
}

export default LabeledProgress