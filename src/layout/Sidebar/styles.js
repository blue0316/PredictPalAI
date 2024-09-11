import styled from 'styled-components/macro';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const StyledDrawer = styled(SwipeableDrawer)`
  .MuiDrawer-paper {
    background-color: var(--widget);
    box-shadow: var(--widget-shadow);
    padding: 30px;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .logo-wrapper {
      padding-bottom: 40px;
    }
  }
`;

const StyledAccordion = styled(Accordion)`
  background-color: transparent !important;
  box-shadow: none !important;

  &:before {
    display: none;
  }

  &.Mui-expanded {
    margin: 0 !important;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  padding: 0 10px !important;
  min-height: unset !important;
  height: 40px;
  margin: 0 -10px !important;
  border-radius: 4px !important;
  transition: background-color var(--transition);

  .MuiAccordionSummary-content {
    margin: 0 !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icon-chevron-down {
    will-change: transform;
    transition: all var(--transition);
    color: var(--text);
    font-size: 0.625rem;
  }

  &.Mui-expanded, &.active {
    background: var(--border);

    .icon-chevron-down {
      transform: rotate(180deg);
      color: var(--header);
    }
  }
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  padding: 20px 10px 10px !important;
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    color: var(--text);
    transition: all var(--transition);
    width: fit-content;
    font-family: var(--heading-font);
    font-weight: 500;
    font-size: 0.75rem;

    &:hover, &:focus,
    &.active {
      color: var(--header);
      text-shadow: 0 0 0 var(--header);
    }
  }
`;

const SingleLink = styled(StyledAccordionSummary)`
  display: flex;
  align-items: center;
  
  &.pinned {
    margin-top: 15px !important;
  }
`;

const Link = styled.span`
  color: var(--text);
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: color var(--transition);
  height: fit-content;

  &:hover, &:focus,
  &.active {
    color: var(--header);
  }

  .icon {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
  }
`;

export {StyledDrawer, SingleLink, Link, StyledAccordion, StyledAccordionSummary, StyledAccordionDetails}