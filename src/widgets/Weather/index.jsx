// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import ElementTooltip from '@ui/ElementTooltip';

// hooks
import {useGeolocation} from 'react-use';
import {useEffect, useState} from 'react';
import {useThemeProvider} from '@contexts/themeContext';

// utils
import dayjs from 'dayjs';
import axios from 'axios';

// constants
import WEATHER_CODES from '@constants/weather';

// dayjs plugins
const isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)

const Weather = () => {
    const {theme} = useThemeProvider();
    const [coords, setCoords] = useState({lat: -33.865143, long: 151.208755});
    const [locationData, setLocationData] = useState({city: 'Sydney', country: 'Australia'});
    const [weather, setWeather] = useState(undefined);
    const {latitude, longitude} = useGeolocation();
    const currentHour = dayjs().hour();

    const getWeather = async () => {
        const {data} = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.long}&hourly=temperature_2m,weathercode&daily=sunrise,sunset&forecast_days=1&timezone=auto`);
        const weatherCode = WEATHER_CODES.find(code => code.code === data.hourly.weathercode[currentHour === 0 ? currentHour : currentHour - 1]);
        const isDay = dayjs().isBetween(dayjs(data.daily.sunrise), dayjs(data.daily.sunset), 'hour');
        setWeather({
            conditions: weatherCode.description,
            temp: data.hourly.temperature_2m[currentHour === 0 ? currentHour : currentHour - 1],
            units: data.hourly_units.temperature_2m,
            icon: isDay ? weatherCode.icons.day : weatherCode.icons.night
        });
    }

    const getGeolocation = async () => {
        const result = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords.lat}&longitude=${coords.long}&localityLanguage=en`);
        setLocationData({city: result.data.city, country: result.data.countryCode});
    }

    useEffect(() => {
        if (latitude && longitude) {
            setCoords({lat: latitude, long: longitude});
        }
    }, [latitude, longitude]);

    useEffect(() => {
        getWeather().then(() => getGeolocation());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [coords]);

    return (
        <Spring className={`${styles.container} ${styles[theme]} card h-1`}>
            <div className={`${styles.content} d-flex flex-column justify-content-between h-100`}>
                {
                    weather && (
                        <>
                            <div className="flex-1 p-relative">
                                <img className={styles.media} src={weather.icon} alt={weather.conditions}/>
                            </div>
                            <div className="card_footer d-flex flex-column align-items-start">
                            <span className={styles.temp}>
                                <span className={styles.temp_num}>{weather.temp}</span>
                                {weather.units}
                            </span>
                                <ElementTooltip title={`${locationData.city}, ${locationData.country}`}>
                                <span className={`${styles.conditions} text-12 text-overflow`}>
                                    {weather.conditions}
                                </span>
                                </ElementTooltip>
                            </div>
                        </>

                    )
                }
            </div>
        </Spring>
    )
}

export default Weather