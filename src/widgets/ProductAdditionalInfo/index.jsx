// components
import Spring from '@components/Spring';
import ProductInfoItem from '@components/ProductInfoItem';

const ProductAdditionalInfo = () => {
    return (
        <Spring className="card flex flex-col gap-4 card-padded">
            <h3>Additional Information</h3>
            <ul className="flex flex-col gap-2">
                <ProductInfoItem property="Brand:" value="Nike"/>
                <ProductInfoItem property="Color:" value="Black"/>
                <ProductInfoItem property="Fabric:" value="100% cotton"/>
                <ProductInfoItem property="Return Policy:" value="60 days"/>
            </ul>
        </Spring>
    )
}

export default ProductAdditionalInfo