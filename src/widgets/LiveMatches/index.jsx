// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFade, Pagination, Thumbs, Autoplay} from 'swiper';
import MatchScoreItem from '@components/MatchScoreItem';

// hooks
import {useEffect, useState} from 'react';
import {useThemeProvider} from '@contexts/themeContext';

// utils
import PropTypes from 'prop-types';

// assets
import cover1 from '@assets/tickets/live1.webp';
import cover2 from '@assets/tickets/live2.webp';
import cover3 from '@assets/tickets/live3.webp';

const data = [
    {
        id: 'live-1',
        cover: cover1,
        team1: {
            id: 'bayern',
            score: 3
        },
        team2: {
            id: 'bvb',
            score: 1
        },
    },
    {
        id: 'live-2',
        cover: cover2,
        team1: {
            id: 'juventus',
            score: 0
        },
        team2: {
            id: 'arsenal',
            score: 2
        },
    },
    {
        id: 'live-3',
        cover: cover3,
        team1: {
            id: 'fiorentina',
            score: 3
        },
        team2: {
            id: 'manunited',
            score: 3
        },
    }
]

const LiveMatches = ({variant = "big"}) => {
    const {direction} = useThemeProvider();
    const [mainSwiper, setMainSwiper] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const thumbsParams = {
        slidesPerView: 1,
        breakpoints: variant === 'big' ? {
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        } : {}
    }

    useEffect(() => {
        if (mainSwiper && thumbsSwiper) {
            mainSwiper.changeLanguageDirection(direction);
            mainSwiper.update();
            thumbsSwiper.changeLanguageDirection(direction);
            thumbsSwiper.update();
        }
    }, [mainSwiper, thumbsSwiper, direction]);

    return (
        <Spring className="card h-2 no-shadow p-relative">
            <span className={`${styles.live} tag tag--accent tag--overlay animated h6`}>Live</span>
            <Swiper className="h-100"
                    modules={[EffectFade, Pagination, Thumbs, Autoplay]}
                    autoplay={{delay: 2500, disableOnInteraction: false}}
                    effect="fade"
                    fadeEffect={{crossFade: true}}
                    loop
                    pagination={{clickable: true, type: 'progressbar'}}
                    onSwiper={swiper => setMainSwiper(swiper)}
                    thumbs={{swiper: thumbsSwiper}}
                    speed={1500}
            >
                {
                    data.map(item => (
                        <SwiperSlide key={item.id}>
                            <img className="h-100" src={item.cover} alt={item.id}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className={styles.thumbs}>
                <Swiper onSwiper={swiper => setThumbsSwiper(swiper)}
                        watchSlidesProgress
                        modules={[Autoplay]}
                        autoplay={{delay: 2500, disableOnInteraction: false}}
                        speed={1500}
                        {...thumbsParams}
                >
                    {
                        data.map(item => (
                            <SwiperSlide className={styles.thumbs_slide} key={item.id}>
                                <MatchScoreItem match={item} variant="thumb"/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </Spring>
    )
}

LiveMatches.propTypes = {
    variant: PropTypes.oneOf(['big', 'small'])
}

export default LiveMatches