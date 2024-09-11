// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// hooks
import useElementScroll from '@hooks/useElementScroll';

// utils
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Scroller = styled.div`
  height: calc(100% - ${props => props.height}px);
  position: relative;
  flex-grow: 1;
  width: 100%;

  &.has-overflow {
    &:before, &:after {
      content: '';
      display: block;
      height: ${props => props.isCompact ? '40px' : '100px'};
      position: absolute;
      width: 100%;
      left: 0;
      z-index: 300;
      transition: height var(--transition);
      background: ${theme('theme', {
        light: 'linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #ffffff 100%)',
        dark: 'linear-gradient(180deg, rgba(17, 19, 18, 0.0001) 0%, #111312 100%)'
      })};
    }

    &:before {
      top: 0;
      transform: scaleY(-1);
    }

    &:after {
      bottom: 0;
    }

    &.is-top:before,
    &.is-bottom:after {
      height: 0;
    }
  }

  .track {
    height: 100%;
    overflow-y: auto;
  }
`;

const ScrollContainer = ({children, height, isCompact = false}) => {
    const {ref, isOverflown, isTop, isBottom} = useElementScroll();

    return (
        <Scroller className={classNames({'has-overflow': isOverflown, 'is-top': isTop, 'is-bottom': isBottom})}
                  height={height}
                  ref={ref}
                  isCompact={isCompact}>
            {children}
        </Scroller>
    );
}

ScrollContainer.propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.number.isRequired,
    isCompact: PropTypes.bool,
}

export default ScrollContainer