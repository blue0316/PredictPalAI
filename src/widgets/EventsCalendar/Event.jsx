// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// components
import TruncatedText from '@components/TruncatedText';
import Popup from '@components/Popup';

// hooks
import useMeasure from 'react-use-measure';
import {useState} from 'react';

// utils
import dayjs from 'dayjs';

const StyledEvent = styled.div`
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid transparent;
  color: ${theme('theme', {
    light: 'var(--text)',
    dark: '#fff'
  })};
  position: relative;
  min-height: 20px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${theme('theme', {
      light: '#f7f7f7',
      dark: '#111312'
    })};
    mix-blend-mode: luminosity;
  }

  &.marketing {
    border-color: var(--turquoise);
    background: var(--turquoise);
  }

  &.workflow {
    border-color: var(--azure);
    background: var(--azure);
  }

  &.health {
    border-color: var(--grass);
    background: var(--grass);
  }

  &.other {
    border-color: var(--accent);
    background: var(--accent);
  }
  
  &.week, &.month {
    .text {
      display: none;
    }
  }
  
  // desktop
    @media screen and (min-width: 1280px) {
      &.week, &.month {
        .text {
            display: block;
        }
      }
      
      &.month {
        min-height: 40px;
      }
    }
`;

const Event = ({event, view}) => {
    const [ref, {width}] = useMeasure();
    const [popupOpen, setPopupOpen] = useState(false);

    const formattedDate = date => dayjs(date).format('HH:mm A');

    const isEnded = dayjs(event.end).isBefore(dayjs());

    return (
        <>
            <StyledEvent className={`${event.type} ${view} ${isEnded ? 'ended' : ''}`}
                         ref={ref}
                         onClick={view !== 'day' ? () => setPopupOpen(true) : null}
            >
                <TruncatedText className="text p-relative z-2" text={event.name} lines={1} width={width}/>
            </StyledEvent>
            {
                view !== 'day' &&
                <Popup
                    open={popupOpen}
                    onClose={() => setPopupOpen(false)}>
                    <div className="d-flex flex-column g-4">
                        <h3>{event.name}</h3>
                        <span className="label h5">
                            {formattedDate(event.start)} - {formattedDate(event.end)}
                        </span>
                    </div>
                </Popup>
            }
        </>
    )
}

export default Event