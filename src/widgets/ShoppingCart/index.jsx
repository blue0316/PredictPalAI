// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import {NavLink} from 'react-router-dom';
import ScrollContainer from '@components/ScrollContainer';
import Popup from '@components/Popup';
import TruncatedText from '@components/TruncatedText';
import IconButton from '@ui/IconButton';
import CompareButton from '@ui/CompareButton';
import Like from '@ui/Like';

// hooks
import useMeasure from 'react-use-measure';
import {useShopProvider} from '@contexts/shopContext';

// assets
import img1 from '@assets/cart/1.webp';
import img2 from '@assets/cart/2.webp';
import img3 from '@assets/cart/3.webp';
import img4 from '@assets/cart/4.webp';
import img5 from '@assets/cart/5.webp';
import img6 from '@assets/cart/6.webp';

const ShoppingCart = ({isPopup}) => {
    const {cartOpen, setCartOpen} = useShopProvider();
    const [headerRef, {height: headerHeight}] = useMeasure();
    const [footerRef, {height: footerHeight}] = useMeasure();
    const [nameRef, {width}] = useMeasure();

    const Wrapper = isPopup ? Popup : Spring;
    const wrapperProps = isPopup ? {
        open: cartOpen,
        onClose: () => setCartOpen(false),
        popupClass: styles.popup
    } : {
        className: 'card h-2 d-flex flex-column'
    };

    const data = [
        {
            id: 1,
            img: img1,
            title: 'White cotton hoodie',
            price: 19.99,
            category: 'Hoodies',
        },
        {
            id: 2,
            img: img2,
            title: 'Black sport jacket',
            price: 15.87,
            category: 'Jackets',
        },
        {
            id: 3,
            img: img3,
            title: 'Nike Blazer Men Shoes',
            price: 120.14,
            category: 'Shoes',
        },
        {
            id: 4,
            img: img4,
            title: 'Cotton gray bottom',
            price: 25,
            category: 'Bottoms',
        },
        {
            id: 5,
            img: img5,
            title: 'City casual backpack',
            price: 33.99,
            category: 'Accessories',
        },
        {
            id: 6,
            img: img6,
            title: 'Olive warm jacket',
            price: 150,
            category: 'Jackets',
        }
    ]

    return (
        <Wrapper {...wrapperProps}>
            <h3 className="card_header" style={{paddingBottom: 20}} ref={headerRef}>
                Shopping Cart
            </h3>
            <ScrollContainer height={headerHeight + footerHeight}>
                <div className="track d-flex flex-column flex-1">
                    {
                        data.map(item => {
                            const price = `$${item.price.toFixed(2)}`;

                            return (
                                <div className={`${styles.item} d-flex align-items-center justify-content-between g-20`}
                                     key={item.id}>
                                    <div className="d-flex align-items-center flex-1 g-10">
                                        <img className="square-avatar" src={item.img} alt={item.title}/>
                                        <div className="d-flex flex-column flex-1" ref={nameRef}>
                                            <NavLink to="/product">
                                                <TruncatedText className="h4" text={item.title} width={width} lines={1}/>
                                            </NavLink>
                                            <span className={`label label--store ${isPopup ? 'h5' : 'h6'}`}>
                                                {isPopup ? price : item.category}
                                            </span>
                                        </div>
                                    </div>
                                    {
                                        isPopup ?
                                            <div className="d-flex g-10">
                                                <Like isCartAction/>
                                                <CompareButton isCartAction/>
                                                <IconButton icon="trash" ariaLabel="Remove product" isCartAction/>
                                            </div>
                                            :
                                            <h3 className="text-highlight">{price}</h3>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </ScrollContainer>
            <div className="card-padded d-flex flex-column g-20" ref={footerRef}>
                {
                    isPopup && (
                        <p className="d-flex justify-content-between h3">Total: <span>$985.90</span></p>
                    )
                }
                <button className="btn w-100">Proceed to checkout</button>
            </div>
        </Wrapper>
    )
}

export default ShoppingCart