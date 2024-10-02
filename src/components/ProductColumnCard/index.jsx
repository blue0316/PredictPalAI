// styling
import styles from './styles.module.scss';

// components
import Like from '@ui/Like';
import {NavLink} from 'react-router-dom';

const ProductColumnCard = ({product}) => {
    return (
        <div className="card p-relative">
            <img className="cover" src={product.img} alt={product.name}/>
            <div className={`${styles.main} d-flex flex-column g-8 card-padded`}>
                <div className="d-flex align-items-center justify-content-between">
                    <NavLink className="h3 light" to="/product" style={{maxWidth: 178}}>
                        {product.name}
                    </NavLink>
                    <Like/>
                </div>
                <span className="label label--store light h6">{product.category}</span>
            </div>
        </div>
    )
}

export default ProductColumnCard