// styling
import styled from 'styled-components/macro';

// components
import Sticky from 'react-stickynode';

// hooks
import {useShopProvider} from '@contexts/shopContext';

const StyledTrigger = styled(Sticky)`
  .sticky-inner-wrapper {
    display: flex;
    align-items: center;
    transition: top var(--transition);
  }

  &.is-sticky .sticky-inner-wrapper {
    height: 40px !important;
    width: 100% !important;
    background: var(--widget);
    border-bottom: 1px solid var(--border);
    left: 0;
    top: var(--header-active) !important;
    padding: 0 20px;
  }
`;

const Trigger = () => {
    const {setFiltersOpen} = useShopProvider();

    return (
        <StyledTrigger top={0} innerZ={999} activeClass="is-sticky">
            <div className="d-flex align-items-center justify-content-between flex-1">
                <h3>Filters</h3>
                <button className="h3" onClick={() => setFiltersOpen(true)} aria-label="Open filters">
                    <i className="icon icon-sliders"/>
                </button>
            </div>
        </StyledTrigger>
    )
}

export default Trigger