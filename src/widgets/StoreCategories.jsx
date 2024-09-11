// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// components
import Spring from '@components/Spring';
import BasicCheckbox from '@ui/BasicCheckbox';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

const Category = styled.div`
  .item {
    position: relative;

    &_qty {
      position: absolute;
      color: ${theme('theme', {
        light: 'var(--btn-text-light)',
        dark: '#B0B7A1'
      })};

      &.ltr {
        margin: -4px 0 0 8px;
      }

      &.rtl {
        margin: -4px 8px 0 0;
      }
    }
  }
`;

const StoreCategories = ({standalone = true}) => {
    const {direction} = useThemeProvider();
    const Wrapper = standalone ? Spring : 'div';
    const wrapperProps = standalone ? {className: 'card d-flex flex-column g-20 card-padded'} : {className: 'd-flex flex-column g-20'};

    const data = [
        {id: 'swim', name: 'Swimwear', qty: 24},
        {id: 'hoodies', name: 'Hoodies & Sweatshirts', qty: 72},
        {id: 'tshirts', name: 'T-shirts', qty: 59},
        {id: 'jackets', name: 'Jackets', qty: 31}
    ];

    return (
        <Wrapper {...wrapperProps}>
            <h3>Categories</h3>
            <div className="d-flex flex-column g-12">
                {
                    data.map(item => (
                        <Category className="d-flex align-items-center g-12" key={item.id}>
                            <BasicCheckbox id={item.id} color="grass"/>
                            <label className="item text-16" htmlFor={item.id}>
                                {item.name}
                                <span className={`item_qty h6 ${direction}`}>{item.qty}</span>
                            </label>
                        </Category>
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default StoreCategories