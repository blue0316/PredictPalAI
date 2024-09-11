// components
import Spring from '@components/Spring';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper';
import ProductColumnCard from '@components/ProductColumnCard';
import SwiperControls from '@ui/SwiperControls';

// hooks
import {useEffect, useState} from 'react';
import {useThemeProvider} from '@contexts/themeContext';

// data placeholder
import brand_products from '@db/brand_products';

const BrandProducts = () => {
    const {direction} = useThemeProvider();
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        if (swiper) {
            swiper.changeLanguageDirection(direction);
            swiper.update();
        }
    }, [swiper, direction]);

    return (
        <Spring className="h-2 h-100 p-relative">
            <Swiper
                className="h-100"
                spaceBetween={24}
                slidesPerView={1}
                onSwiper={setSwiper}
                dir={direction}
                modules={[Autoplay, Navigation]}
                speed={1200}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                loop
                breakpoints={{
                    767: {
                        slidesPerView: 2,
                    },
                    1279: {
                        slidesPerView: 1,
                    },
                    1499: {
                        slidesPerView: 3,
                    }
                }}
            >
                {
                    brand_products.map((product, index) => (
                        <SwiperSlide key={index}
                                     style={{margin: direction === 'ltr' ? '0 24px 0 0' : '0 0 0 24px'}}>
                            <ProductColumnCard product={product}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <SwiperControls swiper={swiper}/>
        </Spring>
    )
}

export default BrandProducts