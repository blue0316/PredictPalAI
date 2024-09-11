import styled from 'styled-components/macro';
import theme from 'styled-theming';

const StyledEventsCalendar = styled.div`
  .rbc-month-view,
  .rbc-time-view,
  .rbc-time-header {
    border: 1px solid var(--border);
  }

  .rbc-off-range-bg,
  .rbc-today {
    background: transparent;
  }

  .rbc-header {
    border-bottom: 1px solid var(--border);
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--heading-font);
    font-size: 10px;
    text-transform: uppercase;
    color: var(--header);
    font-weight: 600;

    button {
      font-weight: 600;
    }
  }

  .rbc-day-bg + .rbc-day-bg,
  .rbc-header + .rbc-header,
  .rbc-time-header-content,
  .rbc-time-content > * + * > * {
    border-left: 1px solid var(--border);
  }

  .rbc-time-content,
  .rbc-time-content:first-of-type {
    border-top: none;
  }

  .rbc-time-header.rbc-overflowing {
    border-right: 1px solid var(--border);
  }

  .rbc-month-row + .rbc-month-row {
    border-top: 1px solid var(--border);
  }

  .rbc-day-slot .rbc-time-slot {
    border-top: 1px dashed var(--border);
  }

  .rbc-timeslot-group {
    border-bottom: 1px dashed var(--border);
    position: relative;

    &:last-of-type {
      border-bottom: none;
    }
  }

  .rbc-current-time-indicator {
    background: ${theme('theme', {
      light: 'var(--azure)',
      dark: 'var(--accent)'
    })};
  }

  .rbc-time-gutter {
    width: 68px;

    .rbc-timeslot-group {
      .rbc-time-slot {
        &:first-of-type {
          flex: 1;
          align-items: center;
          justify-content: center;
          position: relative;

          &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 1px;
            border-top: 1px dashed var(--border);
            transform: translateY(-50%);
            z-index: 1;
          }

          .rbc-label {
            position: relative;
            z-index: 2;
            font-family: var(--heading-font);
            font-size: 9px;
            letter-spacing: 0.45px;
            font-weight: 600;
            color: var(--btn-text);
            height: 20px;
            width: 40px;
            background: var(--widget);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 11px;
          }
        }

        &:last-of-type {
          display: none;
        }
      }
    }
  }

  &.day {
    .rbc-day-slot .rbc-timeslot-group:first-of-type .rbc-time-slot:first-of-type {
      border-top: none;
    }

    .rbc-time-header {
      display: none;
    }
  }

  &.week {
    .rbc-allday-cell,
    .rbc-current-time-indicator{
      display: none;
    }

    .rbc-time-header {
      border: none;
    }
  }

  &.month .rbc-month-view {
    min-height: 500px;

    .rbc-date-cell {
      padding: 4px 0 0 0;
      text-align: center;

      &.rbc-off-range {
        opacity: .5;
      }

      &.rbc-now .rbc-button-link {
        font-weight: 600;
        color: ${theme('theme', {
            light: 'var(--blue)',
            dark: 'var(--accent)'
        })};
      }

      .rbc-button-link {
        font-size: 0.75rem;
        font-family: var(--heading-font);
        font-weight: 500;
      }
    }

    // tablet portrait
    @media screen and (min-width: 768px) {
      min-height: 800px;

      .rbc-date-cell {
        text-align: right;
        padding: 10px;
      }
    }

    // desktop
    @media screen and (min-width: 1280px) {
      min-height: 1200px;
    }
  }

  .rbc-time-view {
    flex: unset;
  }

  .rbc-timeslot-group {
    max-height: 40px;

    .rbc-time-slot {
      display: flex;
      align-items: center;
      height: 20px;
    }
  }

  .rbc-events-container {
    margin: 0 !important;

    .rbc-event {
      padding: 0;
      background: transparent;
      border: none;
      border-radius: 0;

      &-label {
        display: none;
      }
    }
  }

  .rbc-event {
    padding: 0;
    background: transparent !important;
    border-radius: 0;
    outline: none !important;
  }

  .rbc-show-more {
    color: ${theme('theme', {
      light: 'var(--blue)',
      dark: 'var(--accent)'
    })};
    background: transparent;
    margin: 10px auto 0;
  }

  .rbc-row-segment {
    min-height: 20px;

    // desktop
    @media screen and (min-width: 1280px) {
      min-height: 40px;
    }
  }
`;

const Header = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;

  // tablet landscape
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    &[dir="ltr"] {
      &[data-view="day"] .date {
        margin-left: 68px;
      }
    }

    &[dir="rtl"] {
      &[data-view="day"] .date {
        margin-right: 68px;
      }
    }
  }
`;

const Navigation = styled.div`
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  // tablet landscape
  @media screen and (min-width: 1024px) {
    max-width: 300px;
  }
`;

export {StyledEventsCalendar, Navigation, Header}