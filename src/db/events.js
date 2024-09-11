import dayjs from 'dayjs';

const currentMonth = dayjs().month();
const prevMonth = currentMonth - 1;
const nextMonth = currentMonth + 1;

const events = [
    {
        date: dayjs().month(prevMonth).date(15).hour(18).minute(30),
        title: 'Premier League: Chelsea vs Manchester United',
        type: 'league'
    },
    {
        date: dayjs().month(prevMonth).date(22).hour(20).minute(0),
        title: 'Champions League: Barcelona vs PSG',
        type: 'championship'
    },
    {
        date: dayjs().month(currentMonth).date(5).hour(17).minute(0),
        title: 'Serie A: Juventus vs Napoli',
        type: 'league'
    },
    {
        date: dayjs().month(currentMonth).date(5).hour(12).minute(15),
        title: 'FA Cup Semifinals',
        type: 'cup'
    },
    {
        date: dayjs().month(currentMonth).date(12).hour(19).minute(30),
        title: 'La Liga: Atletico Madrid vs Real Madrid',
        type: 'league'
    },
    {
        date: dayjs().month(currentMonth).date(18).hour(14).minute(0),
        title: 'FA Cup Semifinals',
        type: 'cup'
    },
    {
        date: dayjs().month(currentMonth).date(25).hour(16).minute(0),
        title: 'Premier League: Tottenham vs Arsenal',
        type: 'league'
    },
    {
        date: dayjs().month(nextMonth).date(3).hour(15).minute(0),
        title: 'Bundesliga: Borussia Dortmund vs Bayern Munich',
        type: 'league'
    },
    {
        date: dayjs().month(nextMonth).date(9).hour(18).minute(0),
        title: 'Champions League: Quarterfinals',
        type: 'cup'
    },
    {
        date: dayjs().month(nextMonth).date(16).hour(21).minute(0),
        title: 'Europa League: Semifinals',
        type: 'cup'
    },
    {
        date: dayjs().month(nextMonth).date(23).hour(17).minute(0),
        title: 'Premier League: Manchester City vs Liverpool',
        type: 'league'
    },
]

export default events
