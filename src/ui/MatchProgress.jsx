// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// hooks
import useMatchProgress from '@hooks/useMatchProgress';
import {useThemeProvider} from '@contexts/themeContext';

const StyledMatchProgress = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  background: ${theme('theme', {
    light: 'linear-gradient(270deg, #FDCF13 0%, #FFFFFF 100%)',
    dark: 'linear-gradient(90deg, #111312 0%, #FDCF13 100%)',
  })};
  opacity: 0.1;
  transition: width var(--transition);

  &.ltr {
    left: 0;
  }

  &.rtl {
    right: 0;
    transform: scaleX(-1)
  }
`;

const MatchProgress = ({currentMinute = 0, containerWidth}) => {
    const {direction} = useThemeProvider();
    const progress = useMatchProgress(currentMinute);
    const minuteWidth = containerWidth / 90;

    return (
        <StyledMatchProgress className={direction}
                             style={{width: progress === 90 ? '100%' : `${progress * minuteWidth}px`}}/>
    );
}

export default MatchProgress