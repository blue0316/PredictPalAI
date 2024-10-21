// components
import Spring from '@components/Spring';
import TeamStatsCard from '@components/TeamStatsCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper';
import SwiperControls from '@ui/SwiperControls';

// hooks
import {useState, useEffect} from 'react';
import {useThemeProvider} from '@contexts/themeContext';

const data = [
    {id: 'arsenal', value: 10},
    {id: 'chelsea', value: 12},
    {id: 'mancity', value: 9},
    {id: 'manunited', value: 7},
    {id: 'liverpool', value: 18},
    {id: 'fiorentina', value: 4},
    {id: 'realmadrid', value: 10},
    {id: 'juventus', value: 25}
]

const TeamStatsSlider = () => {
    const {direction} = useThemeProvider();
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        if (swiper) {
            swiper.changeLanguageDirection(direction);
            swiper.update();
        }
    }, [direction, swiper]);

    return (
        <Spring className="w-full h-full relative">
            <Swiper className="w-full h-full"
                    style={{paddingTop: 8, marginTop: -8}}
                    onSwiper={setSwiper}
                    modules={[Autoplay]}
                    autoplay={{delay: 3000, disableOnInteraction: false}}
                    speed={1200}
                    dir={direction}
                    breakpoints={{
                        413: {slidesPerView: 2},
                        1279: {slidesPerView: 3},
                        1919: {slidesPerView: 4},
                    }}
                    loop
                    slidesPerView={1}
                    spaceBetween={24}>
                {
                    data.map((item, index) => (
                        <SwiperSlide className="w-full h-full"
                                     key={index}
                                     style={{
                                         width: 175,
                                         margin: direction === 'ltr' ? '0 24px 0 0' : '0 0 0 24px'
                                     }}>
                            <TeamStatsCard {...item}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <SwiperControls swiper={swiper}/>
        </Spring>
    )
}

export default TeamStatsSlider