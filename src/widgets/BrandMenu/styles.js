import styled from 'styled-components/macro';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const Header = styled.div`
  display: grid;
  grid-template-columns: 80px minmax(0, calc(100% - 80px));
  align-items: center;
  gap: 20px;
  padding: var(--card-padding);

  a {
    width: fit-content;
    transition: color var(--transition);

    &:hover, &:focus {
      color: var(--highlight);
    }
  }
`;

const StyledAccordion = styled(Accordion)`
  background: transparent !important;
  box-shadow: none !important;
  border-top: 1px solid var(--border);
  margin: 0 !important;
  
  &:before {
    display: none;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  color: var(--highlight) !important;
  padding: 15px 0 !important;
  font-size: 0.875rem;
  font-weight: 700;
  min-height: unset !important;

  .MuiAccordionSummary-content {
    margin: 0 !important;
    gap: 14px;
    align-items: center;
    
    &.Mui-expanded .icon {
      display: none;
    }
  }
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  padding: 0 0 16px !important;
  
  .link {
    color: var(--highlight);
    font-size: 0.875rem;
    transition: color var(--transition);
    
    &:hover, &:focus {
      color: var(--header)
    }
  }
`;

export {Header, StyledAccordion, StyledAccordionSummary, StyledAccordionDetails}