// styles
import 'react-big-calendar/lib/css/react-big-calendar.css'

// styled components
import {StyledEventsCalendar, Header} from './styles';

// components
import Spring from '@components/Spring';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import ViewNavigator from './ViewNavigator';
import Navigator from './Navigator';
import Event from './Event';

// hooks
import {useState, useEffect} from 'react';
import {useWindowSize} from 'react-use';
import {useThemeProvider} from '@contexts/themeContext';

// utils
import moment from 'moment';

// events
import schedule from '@db/schedule';

const EventsCalendar = () => {
    const {direction} = useThemeProvider();
    const [currentView, setCurrentView] = useState('day');
    const localizer = momentLocalizer(moment);
    const [currentDate, setCurrentDate] = useState(moment().toDate());
    const [currentTime, setCurrentTime] = useState(moment().format('HH:mm'));
    const {width} = useWindowSize();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment().format('HH:mm'));
        }, 1000);
        return () => clearInterval(interval);
    }, [currentTime]);

    const handleNavigation = (action) => {
        switch (action) {
            case 'NEXT':
                setCurrentDate(moment(currentDate).add(1, currentView).toDate());
                break;
            case 'PREV':
                setCurrentDate(moment(currentDate).subtract(1, currentView).toDate());
                break;
            default:
                setCurrentDate(moment().toDate());
        }
    }

    const getWeek = (date) => {
        const start = moment(date).startOf('week');
        const end = moment(date).endOf('week');
        return [start, end];
    }

    const getTitleFormat = () => {
        switch (currentView) {
            case 'month':
                return 'MMMM YYYY';
            case 'week':
                return width < 768 ? 'DD.MM.YY' : 'DD MMMM YYYY';
            case 'day':
                return 'DD MMMM YYYY';
            default:
                return 'MMMM YYYY';
        }
    }

    const getDayFormat = () => {
        switch (true) {
            case width < 768:
                return 'D';
            case width < 1600:
                return 'ddd, D';
            default:
                return 'dddd D MMMM';
        }
    }

    const config = {
        as: Calendar,
        className: currentView,
        views: ['month', 'week', 'day'],
        view: currentView,
        date: currentDate,
        localizer: localizer,
        startAccessor: 'start',
        endAccessor: 'end',
        onNavigate: handleNavigation,
        onView: setCurrentView,
        min: moment().startOf('year').set({hour: 8, minute: 0}).toDate(),
        max: moment().endOf('year').set({hour: 22, minute: 0}).toDate(),
        step: 30,
        events: schedule,
        formats: {
            timeGutterFormat: 'HH:mm',
            dayFormat: getDayFormat(),
        },
        components: {
            toolbar: ({date}) => <Header data-view={currentView} dir={direction}>
                <Navigator date={date} handler={handleNavigation}/>
                <h3 className="date">
                    {
                        currentView === 'week' && getWeek(date).map((date, index) => {
                                return (
                                    <span key={index}>
                                    {date.format(getTitleFormat(date))}
                                        {index === 0 ? ' - ' : null}
                                </span>
                                )
                            }
                        )
                    }
                    {
                        currentView === 'month' && moment(date).format(getTitleFormat(date))
                    }
                    {
                        currentView === 'day' && `${moment(date).format(getTitleFormat(date))}, ${currentTime}`
                    }
                </h3>
                <ViewNavigator current={currentView} handler={setCurrentView}/>
            </Header>,
            event: ({event}) => <Event event={event} view={currentView}/>
        },
        selectable: currentView !== 'day',
        messages: {
            showMore: (total) => `+ ${total}`,
        },
    }

    return (
        <Spring className="card h-fit card-padded">
            <StyledEventsCalendar {...config}/>
        </Spring>
    )
}

export default EventsCalendar