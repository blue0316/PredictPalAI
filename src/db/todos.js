import moment from 'moment';

export const todos = [
    {
        id: 'todo-1',
        name: 'Book flights to Seattle',
        label: 'work',
        timestamp: moment().set({date: 17, month: 3, year: 2022, hour: 12, minute: 20}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: 'todo-2',
        name: 'Finish appointment',
        label: 'work',
        timestamp: moment().set({date: 21, month: 3, year: 2022, hour: 14, minute: 11}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: 'todo-3',
        name: 'Buy a new training shoes',
        label: 'other',
        timestamp: moment().set({date: 15, month: 3, year: 2022, hour: 11, minute: 0}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: 'todo-4',
        name: 'Dinner at Freddie\'s',
        label: 'family',
        timestamp: moment().set({date: 24, month: 3, year: 2022, hour: 18, minute: 0}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: 'todo-5',
        name: 'Visit Global Gym',
        label: 'other',
        timestamp: moment().set({date: 8, month: 4, year: 2022, hour: 8, minute: 43}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: 'todo-6',
        name: 'Medical conference',
        label: 'work',
        timestamp: moment().set({date: 19, month: 4, year: 2022, hour: 12, minute: 50}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: 'todo-7',
        name: 'Medical checkup',
        label: 'other',
        timestamp: moment().set({date: 12, month: 4, year: 2022, hour: 10, minute: 30}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: 'todo-8',
        name: 'Buy a new phone',
        label: 'family',
        timestamp: moment().set({date: 9, month: 4, year: 2022, hour: 15, minute: 0}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: 'todo-9',
        name: 'Buy toy for Aron',
        label: 'family',
        timestamp: moment().set({date: 1, month: 5, year: 2022, hour: 11, minute: 18}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: 'todo-10',
        name: 'Regular dentist checkup',
        label: 'other',
        timestamp: moment().set({date: 17, month: 5, year: 2022, hour: 19, minute: 21}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: 'todo-11',
        name: 'Prepare for presentation',
        label: 'work',
        timestamp: moment().set({date: 28, month: 5, year: 2022, hour: 10, minute: 53}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: 'todo-12',
        name: 'Move to new apartment',
        label: 'family',
        timestamp: moment().set({date: 1, month: 5, year: 2022, hour: 9, minute: 0}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: 'todo-13',
        name: 'Meeting with Mr. Johnson',
        label: 'work',
        timestamp: moment().set({date: 15, month: 5, year: 2022, hour: 14, minute: 30}).valueOf(),
        complete: false,
        expanded: true
    }
];