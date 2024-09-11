// styling
import styled from 'styled-components/macro';
import {css} from 'styled-components';
import theme from 'styled-theming';

// components
import SelectionButton from '@ui/SelectionButton';
import {Swiper, SwiperSlide} from 'swiper/react';

// hooks
import {useEffect, useState} from 'react';
import {useThemeProvider} from '@contexts/themeContext';

// utils
import PropTypes from 'prop-types';

const prevButton = css`
  padding-left: 10px;
  background: ${theme('theme', {
    light: 'linear-gradient(90deg, #FFFFFF 28.49%, rgba(255, 255, 255, 0.0001) 100%);',
    dark: 'linear-gradient(-90deg, rgba(17, 19, 18, 0.0001) 0%, #111312 77.09%);'
  })};
  border-radius: 4px 0 0 0;
`;

const nextButton = css`
  padding-right: 10px;
  background: ${theme('theme', {
    light: 'linear-gradient(-90deg, #FFFFFF 28.49%, rgba(255, 255, 255, 0.0001) 100%);',
    dark: 'linear-gradient(90deg, rgba(17, 19, 18, 0.0001) 0%, #111312 77.09%);'
  })};
  border-radius: 0 4px 0 0;
`;

const StyledSelectionList = styled.div`
  display: flex;
  gap: 20px;
  box-shadow: 0 1px 8px rgba(110, 110, 110, 0.1);
  background: ${theme('theme', {
    light: 'var(--widget)',
    dark: '#1B1F23'
  })};
  position: relative;
  
  .swiper {
    padding: 20px 0;
  }

  .swiper-slide {
    width: fit-content;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

    button {
      width: 50px;
      height: 100%;
      display: flex;
      align-items: center;
      color: #8EA2AB;
    }

    &.ltr button {
      &:first-child {
        ${prevButton};
        justify-content: flex-start;
      }

      &:last-child {
        ${nextButton};
        justify-content: flex-end;
      }
    }

    &.rtl button {
      &:first-child {
        ${nextButton};
        justify-content: flex-start;
      }

      &:last-child {
        ${prevButton};
        justify-content: flex-end;
      }
    }
  }
`;

const SelectionList = ({active, setActive, options, innerRef}) => {
    const [swiper, setSwiper] = useState(null);
    const {direction} = useThemeProvider();

    const handlePrev = () => {
        swiper.slidePrev();
        setActive(options[swiper.realIndex].value || options[swiper.realIndex]);
    }

    const handleNext = () => {
        swiper.slideNext();
        setActive(options[swiper.realIndex].value || options[swiper.realIndex]);
    }

    useEffect(() => {
        if (swiper) {
            swiper.changeLanguageDirection(direction);
            swiper.update();
        }
    }, [swiper, direction]);

    return (
        <StyledSelectionList ref={innerRef}>
            <div className={`nav ${direction}`}>
                <button aria-label="Previous" onClick={handlePrev}>
                    <i className="icon icon-chevron-left"/>
                </button>
                <button aria-label="Next" onClick={handleNext}>
                    <i className="icon icon-chevron-right"/>
                </button>
            </div>
            <Swiper className="selection-list w-100 h-100"
                    onSwiper={setSwiper}
                    slidesPerView="auto"
                    spaceBetween={12}
                    loop={true}
                    centeredSlides={true}>
                {
                    options.map(option => (
                        <SwiperSlide key={option.label || option}>
                            <SelectionButton text={option.label || option}
                                             active={active === option.value || active === option}
                                             onClick={() => setActive(option.value || option)}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </StyledSelectionList>
    )
}

SelectionList.propTypes = {
    active: PropTypes.string,
    setActive: PropTypes.func,
    options: PropTypes.array,
    innerRef: PropTypes.any
}

export default SelectionList

