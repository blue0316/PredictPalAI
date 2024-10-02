// styled components
import {CalendarContainer, Backdrop} from './styles';

// components
import Calendar from 'react-calendar';
import LegendItem from '@ui/LegendItem';
import Grow from '@mui/material/Grow';

// hooks
import {useState} from 'react';
import {useThemeProvider} from '@contexts/themeContext';

// utils
import dayjs from 'dayjs';

// data placeholder
import events from '@db/events.js';

const EventsList = ({events, color}) => {
    const sortedEvents = events.sort((a, b) => dayjs(a.date).isAfter(dayjs(b.date)) ? 1 : -1);

    return (
        <div className="d-flex flex-column g-8">
            {
                sortedEvents.map((event, index) => (
                    <div className="popup_event d-flex flex-column g-2" key={index}>
                        <h5 className="title">
                            <span className="title_color" style={{backgroundColor: `var(--${color(event.date)})`}}/>
                            {event.title}
                        </h5>
                        <span className="time label h6">
                            {dayjs(event.date).format('HH:mm')}
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

const GamesCalendar = () => {
    const {direction} = useThemeProvider();
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const legend = [
        {label: 'League', color: 'azure'},
        {label: 'Championship', color: 'grass'},
        {label: 'Cup', color: 'pink'}
    ]

    const dateEvents = date => events.filter(event => dayjs(event.date).isSame(date, 'day'));

    const dateColor = date => legend.filter(item => item.label.toLowerCase() === dateEvents(date)[0].type)[0].color;

    const config = {
        locale: 'en-AU',
        navigationLabel: ({date}) => `${dayjs(date).format('MMMM YYYY')}`,
        navigationAriaLabel: 'Current month',
        prevLabel: <i className="icon icon-chevron-left"/>,
        nextLabel: <i className="icon icon-chevron-right"/>,
        prev2Label: null,
        next2Label: null,
        nextAriaLabel: 'Next month',
        prevAriaLabel: 'Previous month',
        formatShortWeekday: (locale, date) => dayjs(date).format('dd'),
        tileContent: ({date}) =>
            dateEvents(date).length ?
                <span className="overlay">
                    <span className="overlay_bar" style={{backgroundColor: `var(--${dateColor(date)})`}}/>
                </span>
                :
                null,
        tileClassName: ({date}) => dateEvents(date).length ? 'active' : null,
        onClickDay: (value) => {
            setSelectedDate(value);
            setPopupOpen(true);
        },
    }

    return (
        <CalendarContainer className="card h-2 p-relative">
            <div className="main">
                <h3>Games calendar</h3>
                <Calendar {...config}/>
            </div>
            <div className="d-flex flex-wrap g-14 card-padded border-top">
                {
                    legend.map((item, index) => (
                        <LegendItem key={index} text={item.label} color={item.color}/>
                    ))
                }
            </div>
            {
                selectedDate &&
                <Backdrop className={popupOpen ? 'visible' : ''} onClick={() => setPopupOpen(false)}>
                    <Grow in={popupOpen} timeout={300} style={{transformOrigin: '0 0 0'}}>
                        <div className={`popup ${direction}`}>
                            <button className="popup_btn"
                                    onClick={() => setPopupOpen(false)}
                                    aria-label="Close">
                                <i className="icon icon-xmark"/>
                            </button>
                            <EventsList events={dateEvents(selectedDate)} color={dateColor}/>
                        </div>
                    </Grow>
                </Backdrop>
            }
        </CalendarContainer>
    )
}

export default GamesCalendar