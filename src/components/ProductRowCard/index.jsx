// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import TruncatedText from '@components/TruncatedText';
import {Link} from 'react-router-dom';
import CustomRating from '@ui/CustomRating';
import Price from '@ui/Price';
import IconButton from '@ui/IconButton';

// hooks
import useMeasure from 'react-use-measure';
import {useWindowSize} from 'react-use';

const ProductRowCard = ({product, isSlide = false}) => {
    const Wrapper = isSlide ? 'div' : Spring;
    const [ref, {width}] = useMeasure();
    const {width: windowWidth} = useWindowSize();

    return (
        <Wrapper className={`${styles.container} card card-padded ${windowWidth >= 414 ? 'h-1' : ''}`}>
            <img className={styles.media} src={product.img} alt={product.name}/>
            <div className={styles.main} ref={ref}>
                <div className="d-flex flex-column flex-1">
                    <span className="label label--store h6">{product.category}</span>
                    <Link className={styles.main_title} to="/product">
                        <TruncatedText className="h3" width={width} text={product.name}/>
                    </Link>
                    <CustomRating value={product.rating}/>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <Price price={product.price}/>
                    <IconButton/>
                </div>
            </div>
        </Wrapper>
    )
}

export default ProductRowCard