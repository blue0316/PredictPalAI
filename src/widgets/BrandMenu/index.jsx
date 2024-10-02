// styled components
import {Header, StyledAccordion, StyledAccordionSummary, StyledAccordionDetails} from './styles';

// components
import Spring from '@components/Spring';
import ScrollContainer from '@components/ScrollContainer';
import LazyImage from '@components/LazyImage';

// hooks
import useMeasure from 'react-use-measure';

// assets
import nike from '@assets/nike.webp';

const BrandMenu = () => {
    const [ref, {height}] = useMeasure();

    const data = [
        {
            title: 'Shoes',
            items: [
                {title: 'Sandals', qty: 20},
                {title: 'Sneakers', qty: 13},
                {title: 'Boots', qty: 10},
                {title: 'Slippers', qty: 16},
                {title: 'Flip Flops', qty: 32},
                {title: 'Loafers', qty: 22}
            ]
        },
        {
            title: 'Clothing',
            items: [
                {title: 'T-Shirts', qty: 85},
                {title: 'Shirts', qty: 66},
                {title: 'Pants', qty: 78},
                {title: 'Shorts', qty: 32},
                {title: 'Sweaters', qty: 44},
                {title: 'Jackets', qty: 58}
            ]
        },
        {
            title: 'Accessories',
            items: [
                {title: 'Bags', qty: 10},
                {title: 'Belts', qty: 3},
                {title: 'Hats', qty: 14},
                {title: 'Socks', qty: 28},
                {title: 'Gloves', qty: 8},
                {title: 'Scarves', qty: 12}
            ]
        }
    ]

    return (
        <Spring className="card h-2">
            <Header ref={ref}>
                <LazyImage src={nike} alt="Nike"/>
                <div className="d-flex flex-column g-2">
                    <h3 className="text-20">Nike</h3>
                    <a className="text-12" href="https://www.nike.com" rel="noreferrer noopener" target="_blank">
                        www.nike.com
                    </a>
                </div>
            </Header>
            <ScrollContainer height={height}>
                <div className="track card-padded" style={{paddingTop: 0}}>
                    {
                        data.map((item, index) => (
                            <StyledAccordion key={index} defaultExpanded={index === 1}>
                                <StyledAccordionSummary>
                                    <i className="icon icon-caret-down"/> {item.title}
                                </StyledAccordionSummary>
                                <StyledAccordionDetails>
                                    <ul className="d-flex flex-column g-8">
                                        {
                                            item.items.map((item, index) => (
                                                <li className="d-flex g-16" key={index}>
                                                    <button className="link">{item.title}</button>
                                                    <span className="label h6">{item.qty}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </StyledAccordionDetails>
                            </StyledAccordion>
                        ))
                    }
                </div>
            </ScrollContainer>
        </Spring>
    )
}

export default BrandMenu