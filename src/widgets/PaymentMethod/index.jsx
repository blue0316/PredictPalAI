// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import ScrollContainer from '@components/ScrollContainer';
import Radio from '@ui/Radio';

// hooks
import useMeasure from 'react-use-measure';
import {useState} from 'react';
import {useThemeProvider} from '@contexts/themeContext';

// utils
import {modifyCardNumber} from '@utils/helpers';
import dayjs from 'dayjs';

// assets
import mc from '@assets/mastercard.svg';
import visa from '@assets/visa.svg';

const data = [
    {id: 'card-1', type: 'visa', number: '44410000515122', lastUsed: new Date()},
    {id: 'card-2', type: 'mastercard', number: '7850145269870021', lastUsed: new Date(2022, 5, 12)},
    {id: 'card-3', type: 'visa', number: '4058215874952361', lastUsed: new Date(2022, 4, 8)},
    {id: 'card-4', type: 'visa', number: '5285606522147812', lastUsed: new Date(2019, 2, 25)},
    {id: 'card-5', type: 'mastercard', number: '5100236512987432', lastUsed: new Date(2012, 11, 3)}
]

const PaymentMethod = () => {
    const {theme} = useThemeProvider();
    const [selected, setSelected] = useState(data[0].id);
    const [headerRef, {height: headerHeight}] = useMeasure();
    const [footerRef, {height: footerHeight}] = useMeasure();

    return (
        <Spring className="card h-2 d-flex flex-column">
            <h3 className="card_header" style={{paddingBottom: 20}} ref={headerRef}>
                Payment Method
            </h3>
            <ScrollContainer height={headerHeight + footerHeight}>
                <div className={`${styles.list} track`}>
                    {
                        data.map((item, index) => (
                            <Spring className={`${styles.item} ${styles[theme]} ${selected === item.id ? styles.selected : ''}`}
                                    type="slideUp"
                                    key={item.id}
                                    index={index}>
                                <div className={styles.item_media}>
                                    <img src={item.type === 'visa' ? visa : mc} alt={item.type}/>
                                </div>
                                <div className="flex-1">
                                    <span className={styles.item_num}>{modifyCardNumber(item.number)}</span>
                                    <p className="label h6">
                                        Last used: {dayjs(item.lastUsed).format('DD MMM YYYY')}
                                    </p>
                                </div>
                                <Radio name="credit-card"
                                       id={item.id}
                                       checked={selected === item.id}
                                       onChange={() => setSelected(item.id)}
                                />
                            </Spring>
                        ))
                    }
                </div>
            </ScrollContainer>
            <div className="card_footer" style={{paddingTop: 20}} ref={footerRef}>
                <button className="btn w-100">Add new</button>
            </div>
        </Spring>
    )
}

export default PaymentMethod