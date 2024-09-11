// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Thumbs, EffectFade} from 'swiper';
import Like from '@ui/Like';
import SizeSelector from '@ui/SizeSelector';
import SizeGuide from '@components/SizeGuide';
import Price from '@ui/Price';
import IconButton from '@ui/IconButton';
import CompareButton from '@ui/CompareButton';
import ColorCheckbox from '@ui/ColorCheckbox';

// hooks
import {useState, useEffect} from 'react';
import {useThemeProvider} from '@contexts/themeContext';

// constants
import {SIZES} from '@constants/shop';

// assets
import full1 from '@assets/product/full1.webp';
import full2 from '@assets/product/full2.webp';
import full3 from '@assets/product/full3.webp';
import full4 from '@assets/product/full4.webp';
import full5 from '@assets/product/full5.webp';
import thumb1 from '@assets/product/thumb1.webp';
import thumb2 from '@assets/product/thumb2.webp';
import thumb3 from '@assets/product/thumb3.webp';
import thumb4 from '@assets/product/thumb4.webp';
import thumb5 from '@assets/product/thumb5.webp';

const ProductDisplay = () => {
    const {direction} = useThemeProvider();
    const [popupOpen, setPopupOpen] = useState(false);
    const [mainSwiper, setMainSwiper] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {
        if (mainSwiper && thumbsSwiper) {
            mainSwiper.changeLanguageDirection(direction);
            mainSwiper.update();
            thumbsSwiper.changeLanguageDirection(direction);
            thumbsSwiper.update();
        }
    }, [mainSwiper, thumbsSwiper, direction]);

    const productColors = [
        {id: 'yellow', color1: 'accent'},
        {id: 'blue', color1: 'blue'},
        {id: 'black', color1: 'black-3'},
        {id: 'grass', color1: 'grass'},
        {id: 'salmon', color1: 'salmon'},
        {id: 'olive', color1: 'olive-light'},
        {id: 'pink', color1: 'pink'},
        {id: 'haki', color1: 'haki'},
        {id: 'neon-green', color1: 'neon-green'}
    ]

    return (
        <Spring className={`${styles.container} card d-grid card-padded`}>
            <div className={styles.media}>
                <Swiper
                    className={styles.media_main}
                    id="main"
                    onSwiper={swiper => setMainSwiper(swiper)}
                    thumbs={{swiper: thumbsSwiper}}
                    modules={[Autoplay, EffectFade, Thumbs]}
                    autoplay={{delay: 3000, disableOnInteraction: false}}
                    effect="fade"
                    speed={1200}
                    fadeEffect={{crossFade: true}}
                >
                    <SwiperSlide>
                        <img src={full1} alt="full1"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={full2} alt="full2"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={full3} alt="full3"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={full4} alt="full4"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={full5} alt="full5"/>
                    </SwiperSlide>
                </Swiper>
                <Swiper onSwiper={swiper => setThumbsSwiper(swiper)}
                        spaceBetween={12}
                        breakpoints={{
                            767: {
                                spaceBetween: 15
                            }
                        }}
                        slidesPerView={3}
                        speed={1200}
                        watchSlidesProgress>
                    <SwiperSlide className={`${styles.thumb} ${styles[direction]}`}>
                        <img className="border-8" src={thumb1} alt="thumb1"/>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.thumb} ${styles[direction]}`}>
                        <img className="border-8" src={thumb2} alt="thumb2"/>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.thumb} ${styles[direction]}`}>
                        <img className="border-8" src={thumb3} alt="thumb3"/>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.thumb} ${styles[direction]}`}>
                        <img className="border-8" src={thumb4} alt="thumb4"/>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.thumb} ${styles[direction]}`}>
                        <img className="border-8" src={thumb5} alt="thumb5"/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <span className={styles.divider}/>
            <div className="d-flex flex-column">
                <div className="d-flex flex-column g-30 flex-1">
                    <div className="d-flex flex-column g-24">
                        <div className="d-flex flex-column g-10">
                            <span className="label label--store h6">T-shirts</span>
                            <div className="d-flex align-items-center justify-content-between">
                                <h3 style={{maxWidth: 240}}>Jordan Flight Essentials Casual T-shirt</h3>
                                <Like color="light"/>
                            </div>
                        </div>
                        <p>
                            Designed with an intentionally oversized fit, this tee is ready for whatever the day brings.
                            With a
                            Jumpman woven patch on the chest.
                        </p>
                    </div>
                    <div className="d-flex flex-column g-16">
                        <h3>Select color</h3>
                        <div className="d-flex flex-wrap g-16">
                            {
                                productColors.map(color => (
                                    <ColorCheckbox key={color.id} type="radio" name="product-color" {...color}/>
                                ))
                            }
                        </div>
                    </div>
                    <div className="d-flex flex-column g-16" style={{marginBottom: 30}}>
                        <div className="d-flex justify-content-between">
                            <h3>Select size</h3>
                            <button className="text-button" onClick={() => setPopupOpen(true)}>
                                Size table
                            </button>
                        </div>
                        <div className="d-flex flex-wrap g-16">
                            {
                                SIZES.map(size => (
                                    <SizeSelector key={size} size={size}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={`${styles.footer} d-flex align-items-center justify-content-between border-top`}>
                    <Price price={90.99}/>
                    <div className="d-flex align-items-center g-24">
                        <CompareButton/>
                        <IconButton/>
                    </div>
                </div>
                <div className={`${styles.footer_details} d-flex flex-column g-8`}>
                    <p className="heading-font">
                        <span className="text-600">Category:</span> T-Shirt</p>
                    <p className="heading-font">
                        <span className="text-600">Availability:</span> In Stock 10 Items
                    </p>
                </div>
            </div>
            <SizeGuide open={popupOpen} onClose={() => setPopupOpen(false)}/>
        </Spring>
    )
}

export default ProductDisplay