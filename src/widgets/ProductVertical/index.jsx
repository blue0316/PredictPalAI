// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import Price from '@ui/Price';
import TruncatedText from '@components/TruncatedText';
import CompareButton from '@ui/CompareButton';
import IconButton from '@ui/IconButton';
import Like from '@ui/Like';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade} from 'swiper';
import ProductInfoItem from '@components/ProductInfoItem';

// hooks
import useMeasure from 'react-use-measure';
import {useEffect, useState} from 'react';
import {useThemeProvider} from '@contexts/themeContext';

// assets
import img1 from '@assets/product/full1.webp';
import img2 from '@assets/product/full2.webp';
import img3 from '@assets/product/full3.webp';

const ProductVertical = () => {
    const {direction} = useThemeProvider();
    const [swiper, setSwiper] = useState(null);
    const [titleRef, {width: titleWidth}] = useMeasure();

    useEffect(() => {
        if (swiper) {
            swiper.changeLanguageDirection(direction);
            swiper.update();
        }
    }, [swiper, direction]);

    return (
        <Spring className="card d-flex flex-column card-padded">
            <div className="flex-1">
                <div className="d-flex flex-column g-16">
                    <div className="d-flex flex-column g-10">
                        <span className="label label--store h6">Сity backpacks</span>
                        <div className={styles.title} ref={titleRef}>
                            <TruncatedText className="h3" text="Gazelle Super x Alltimers Backpack" width={titleWidth}/>
                        </div>
                    </div>
                    <Price price={245.18}/>
                </div>
                <Swiper className={styles.swiper}
                        onSwiper={setSwiper}
                        modules={[Autoplay, EffectFade]}
                        autoplay={{delay: 3000, disableOnInteraction: false}}
                        effect="fade"
                        fadeEffect={{crossFade: true}}
                        speed={1200}>
                    <SwiperSlide className={styles.swiper_slide}>
                        <img src={img1} alt="img1"/>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>
                        <img src={img2} alt="img2"/>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>
                        <img src={img3} alt="img3"/>
                    </SwiperSlide>
                </Swiper>
                <div className="d-flex flex-column g-30">
                    <p>
                        Knuckle rally save bat center field full count swing grass. League can of corn slide
                        doubleheader hall of fame perfect game dodgers dodgers bunt. League can of corn slide.
                    </p>
                    <ul className="d-flex flex-column g-8">
                        <ProductInfoItem property="Brand:" value="Nike"/>
                        <ProductInfoItem property="Color:" value="Black"/>
                        <ProductInfoItem property="Fabric:" value="100% cotton"/>
                        <ProductInfoItem property="Return Policy:" value="60 days"/>
                    </ul>
                </div>
            </div>
            <div className={`${styles.footer} d-flex justify-content-between`}>
                <IconButton/>
                <div className="d-flex align-items-center g-20">
                    <CompareButton/>
                    <Like color="light"/>
                </div>
            </div>
        </Spring>
    )
}

export default ProductVertical