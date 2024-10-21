// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import Price from '@ui/Price';
import CompareButton from '@ui/CompareButton';
import IconButton from '@ui/IconButton';
import Like from '@ui/Like';
import TruncatedText from '@components/TruncatedText';
import CustomRating from '@ui/CustomRating';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade} from 'swiper';
import {NavLink} from 'react-router-dom';

// hooks
import useMeasure from 'react-use-measure';
import {useThemeProvider} from '@contexts/themeContext';
import {useEffect, useState} from 'react';

const SimpleProduct = ({product}) => {
    const [ref, {width}] = useMeasure();
    const {direction} = useThemeProvider();
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        if (swiper) {
            swiper.changeLanguageDirection(direction);
            swiper.update();
        }
    }, [swiper, direction]);

    return (
        <Spring className="card height-w-2 flex flex-col justify-between card-padded">
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <div className={styles.title} ref={ref}>
                        <NavLink className="h3" to="/product">
                            <TruncatedText text={product.name} width={width}/>
                        </NavLink>
                    </div>
                    <Like color="light"/>
                </div>
                <CustomRating value={product.rating}/>
            </div>
            <Swiper className={styles.swiper}
                    onSwiper={setSwiper}
                    slidesPerView={1}
                    loop
                    autoplay={{delay: 1500, disableOnInteraction: false}}
                    effect="fade"
                    fadeEffect={{crossFade: true}}
                    modules={[Autoplay, EffectFade]}
                    speed={1200}
            >
                {
                    product.media.map((media, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.swiper_slide}>
                                <img src={media} alt="product"/>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="flex justify-between">
                <Price price={product.price}/>
                <div className="flex items-center gap-5">
                    <CompareButton/>
                    <IconButton/>
                </div>
            </div>
        </Spring>
    )
}

export default SimpleProduct