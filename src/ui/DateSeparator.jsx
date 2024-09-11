// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

const Separator = styled.div`
  margin-bottom: 6px;
  position: relative;

  &.rtl {
    padding-right: 30px;
  }

  &.ltr {
    padding-left: 30px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    border-top: 1px dashed ${theme('theme', {
      light: 'var(--nav-arrow)',
      dark: 'var(--text-light)',
    })};
  }

  .date {
    background: var(--widget);
    color: ${theme('theme', {
      light: 'var(--btn-text-light)',
      dark: 'var(--text)',
    })};
    position: relative;
    z-index: 1;
    width: fit-content;
    height: 20px;
    line-height: 1;
    text-transform: uppercase;
    padding: 0 6px;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

const DateSeparator = ({date}) => {
    const {direction} = useThemeProvider();

    return (
        <Separator className={direction}>
            <h6 className="date">{date}</h6>
        </Separator>
    )
};

export default DateSeparator