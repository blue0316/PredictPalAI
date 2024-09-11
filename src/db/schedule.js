import moment from 'moment';

const schedule = [
    {
        name: 'UPS Marketing Event',
        start: moment().set({hour: 9, minute: 0, second: 0, millisecond: 0}).toDate(),
        end: moment().set({hour: 10, minute: 0, second: 0, millisecond: 0}).toDate(),
        allDay: false,
        type: 'marketing'
    },
    {
        name: 'Hermes presentation',
        start: moment().set({hour: 12, minute: 30, second: 0, millisecond: 0}).toDate(),
        end: moment().set({hour: 13, minute: 30, second: 0, millisecond: 0}).toDate(),
        allDay: false,
        type: 'marketing'
    },
    {
        name: 'Team meeting',
        start: moment().set({hour: 16, minute: 30, second: 0, millisecond: 0}).toDate(),
        end: moment().set({hour: 18, minute: 0, second: 0, millisecond: 0}).toDate(),
        allDay: false,
        type: 'workflow'
    },
    {
        name: 'Medical checkup',
        start: moment().set({hour: 11, minute: 0, second: 0, millisecond: 0}).toDate(),
        end: moment().set({hour: 12, minute: 0, second: 0, millisecond: 0}).toDate(),
        allDay: false,
        type: 'health'
    },
    {
        name: 'Dinner with friends',
        start: moment().set({hour: 13, minute: 30, second: 0, millisecond: 0}).toDate(),
        end: moment().set({hour: 14, minute: 30, second: 0, millisecond: 0}).toDate(),
        allDay: false,
        type: 'other'
    },
    {
        name: 'Semi-annual review',
        start: moment().set({hour: 20, minute: 0, second: 0, millisecond: 0}).toDate(),
        end: moment().set({hour: 22, minute: 0, second: 0, millisecond: 0}).toDate(),
        allDay: false,
        type: 'workflow'
    },
]

export default schedule