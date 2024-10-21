// styling
import styles from './styles.module.scss';

// components
import Like from '@ui/Like';
import {NavLink} from 'react-router-dom';

const ProductColumnCard = ({product}) => {
    return (
        <div className="card relative">
            <img className="cover" src={product.img} alt={product.name}/>
            <div className={`${styles.main} flex flex-col gap-2 card-padded`}>
                <div className="flex items-center justify-between">
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