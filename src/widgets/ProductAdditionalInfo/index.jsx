// components
import Spring from '@components/Spring';
import ProductInfoItem from '@components/ProductInfoItem';

const ProductAdditionalInfo = () => {
    return (
        <Spring className="card d-flex flex-column g-16 card-padded">
            <h3>Additional Information</h3>
            <ul className="d-flex flex-column g-8">
                <ProductInfoItem property="Brand:" value="Nike"/>
                <ProductInfoItem property="Color:" value="Black"/>
                <ProductInfoItem property="Fabric:" value="100% cotton"/>
                <ProductInfoItem property="Return Policy:" value="60 days"/>
            </ul>
        </Spring>
    )
}

export default ProductAdditionalInfo