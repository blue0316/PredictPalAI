// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import {NavLink} from 'react-router-dom';
import MatchMonthCard from '@components/MatchMonthCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import ScrollContainer from '@components/ScrollContainer';

// hooks
import {useThemeProvider} from '@contexts/themeContext';
import {useState, useEffect} from 'react';

// utils
import dayjs from 'dayjs';
import {getMonthDays} from '@utils/helpers';
import classNames from 'classnames';

// data placeholder
import matches from '@db/matches';

const Navigator = ({active, setActive}) => {
    const {theme, direction} = useThemeProvider();
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        if (swiper) {
            swiper.slideToLoop(parseInt(active) - 1);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [swiper, active]);

    useEffect(() => {
        if (swiper) {
            swiper.changeLanguageDirection(direction);
            swiper.update();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [swiper, direction]);

    return (
        <div className={`${styles.navigator} ${theme === 'light' ? styles.light : styles.dark}`}>
            <Swiper
                className="h-100"
                slidesPerView="auto"
                spaceBetween={10}
                centeredSlides={true}
                onSwiper={setSwiper}
                loop
                initialSlide={+active - 1}
            >
                {
                    getMonthDays().map((day, index) => (
                        <SwiperSlide className={styles.slide} key={index}>
                            <div className={classNames(`${styles.navigator_item} ${styles[direction]}`, {[styles.active]: active === parseInt(day.date)})}
                                 onClick={() => setActive(parseInt(day.date))}>
                                <h4 className={styles.day}>{day.date}</h4>
                                <span className="label h6">{day.weekday}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

const MonthMatches = () => {
    const {direction} = useThemeProvider();
    const [selectedDay, setSelectedDay] = useState(parseInt(dayjs().format('DD')));

    return (
        <Spring className="card d-flex flex-column">
            <div className="card_header d-flex flex-column g-10" style={{paddingBottom: 20}}>
                <div className="d-flex justify-content-between align-items-center">
                    <h3>{dayjs().format('MMMM')} matches</h3>
                    <NavLink className="text-button" to="/schedule">Scheduler</NavLink>
                </div>
                <Navigator active={selectedDay} setActive={setSelectedDay}/>
            </div>
            <div className={styles.grid}>
                <div className={styles.scroll}>
                    <ScrollContainer height={0}>
                        <div className={`${styles.scroll_track} ${styles[direction]} track d-flex flex-column g-20`}>
                            {
                                matches.map((match, index) => (
                                    <MatchMonthCard match={match} index={index} key={index}/>
                                ))
                            }
                        </div>
                    </ScrollContainer>
                </div>
                <div className={`${styles.card} ${styles[direction]}`}>
                    <MatchMonthCard match={matches[2]} variant="extended"/>
                </div>
            </div>
        </Spring>
    )
}

export default MonthMatches