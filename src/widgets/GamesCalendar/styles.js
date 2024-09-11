import styled from 'styled-components/macro';
import theme from 'styled-theming';
import Spring from '@components/Spring';

const CalendarContainer = styled(Spring)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .main {
    padding: var(--card-padding) var(--card-padding) 20px;
  }

  .react-calendar {
    &__navigation {
      background: ${theme('theme', {
        light: 'var(--light-gray)',
        dark: 'var(--border)',
      })};
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 4px;
      margin: 20px 0;

      &__label {
        font-family: var(--heading-font);
        font-weight: 600;
        color: var(--btn-text);
        font-size: 0.75rem;
        width: fit-content;
        flex-grow: unset !important;
      }

      i {
        color: var(--nav-arrow);
        padding: 0 20px;
      }
    }

    &__month-view {
      height: 100%;

      & > div {
        height: 100%;
        align-items: center;
      }

      & > div > div {
        display: flex;
        flex-direction: column-reverse;
        gap: 16px;
      }

      &__weekdays {
        display: grid !important;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        text-align: center;

        &__weekday {
          font-family: var(--heading-font);
          text-transform: uppercase;
          font-size: 0.5rem;
          font-weight: 500;

          abbr {
            text-decoration: none;
          }
        }
      }

      &__days {
        display: grid !important;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        justify-content: center;
        gap: 2px 0;

        &__day {
          &--neighboringMonth {
            opacity: 0.25;
            background: ${theme('theme', {
              light: 'var(--body-light)',
              dark: 'var(--border-dark)',
            })};
          }
        }
      }
    }

    &__tile {
      width: 32px;
      height: 32px;
      border-radius: 4px;
      font-family: var(--heading-font);
      font-weight: 600;
      color: var(--header);
      font-size: 0.6875rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2px;
      position: relative;

      &:not(.active) {
        pointer-events: none;
      }

      &--now {
        color: var(--azure);
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        &_bar {
          display: block;
          background: #0496FF;
          border-radius: 2px;
          width: 10px;
          height: 2px;
          position: absolute;
          bottom: 6px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  visibility: hidden;
  opacity: 0;
  transition: all var(--transition);

  &.visible {
    visibility: visible;
    opacity: 1;
  }

  .popup {
    padding: 20px 30px;
    border-radius: 4px;
    background: var(--tooltip-bg);
    box-shadow: var(--widget-shadow);
    max-height: 200px;
    overflow-y: auto;

    &.ltr .popup_btn {
      right: 15px;
    }

    &.rtl .popup_btn {
      left: 15px;
    }

    &_btn {
      position: absolute;
      top: 15px;
      transition: color var(--transition);

      &:hover {
        color: var(--red);
      }
    }

    &_event {
      &:not(:last-child) {
        padding-bottom: 8px;
        border-bottom: 1px solid var(--border);
      }

      .title {
        line-height: 1.2;
        display: inline-flex;
        align-items: center;
        gap: 6px;

        &_color {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
      }

      .time {
        margin-left: 12px;
      }
    }
  }
`;

export {CalendarContainer, Backdrop}