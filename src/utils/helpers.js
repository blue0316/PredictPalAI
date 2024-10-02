// components
import {Text} from 'recharts';

// utils
import dayjs from 'dayjs';

// constants
import CLUBS from '@constants/clubs';

// represent large numbers in a shortened format
export const numFormatter = (num, decimals = 0) => {
    if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(decimals) + 'k';
    } else if (num > 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num < 900) {
        return num;
    }
}

// random integer generator
export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// add zero to numbers less than 10
export function addZero(num) {
    return num < 10 ? '0' + num : num;
}

// grid y-axis or x-axis points generator for recharts
/**
 *
 * @param id - container id
 * @param gutter - grid gutter
 * @param axis - 'x' or 'y'
 * @returns {*[]} - array of grid points
 */
export const generateGridPoints = (id, gutter = 20, axis = 'y') => {
    const gridWidth = document.getElementById(id).offsetWidth;
    const gridHeight = document.getElementById(id).offsetHeight;

    let points = [];
    for (let i = 0; i < (axis === 'y' ? gridWidth : gridHeight); i += gutter) {
        points.push(i);
    }
    return points;
}

// prevent default behavior for all forms and links with href="#"
export const preventDefault = () => {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', e => e.preventDefault());
    });
    document.querySelectorAll('a[href="#"]').forEach(a => {
        a.addEventListener('click', e => e.preventDefault());
    });
}

// get club info by id
/** @param id - club id
 *
 * @param id
 * @returns {{country: string, color: string, city: string, name: string, logo: *, id: string, shortName: string} | {country: string, color: string, city: string, name: string, logo: *, id: string, shortName: string} | {country: string, color: string, city: string, name: string, logo: *, id: string, shortName: string} | {country: string, color: string, city: string, name: string, logo: *, id: string, shortName: string} | {country: string, color: string, city: string, name: string, logo: *, id: string, shortName: string}}
 */
export const getClubInfo = (id) => CLUBS.find((club) => club.id === id);

// get array of month days (date and weekday)
export const getMonthDays = (month = dayjs().month(), year = dayjs().year()) => {
    const days = [];
    const daysInMonth = dayjs(`${year}-${month + 1}`).daysInMonth();
    for (let i = 1; i <= daysInMonth; i++) {
        days.push({
            date: dayjs(`${year}-${month + 1}-${i}`).format('DD'),
            weekday: dayjs(`${year}-${month + 1}-${i}`).format('dd')
        });
    }
    return days;
}

/**
 * render polar angle axis
 * @param payload
 * @param x
 * @param y
 * @param cx
 * @param cy
 * @param rest
 * @returns {JSX.Element}
 */
export const renderPolarAngleAxis = ({payload, x, y, cx, cy, ...rest}) => {
    return (
        <Text
            {...rest}
            verticalAnchor="middle"
            textAnchor="middle"
            y={y + (y - cy) / 8}
            x={x + (x - cx) / 5}
            fill="var(--btn-text)"
        >
            {payload.value}
        </Text>
    );
}

/**
 * modify card number
 * @param cardNumber
 * @returns {string}
 */
export const modifyCardNumber = (cardNumber) => {
    const lastDigits = cardNumber.substring(8);
    const maskedDigits = "**** ";

    // Combine the modified parts to form the final card number
    const modifiedCardNumber = maskedDigits + lastDigits.slice(-4);

    return modifiedCardNumber;
}