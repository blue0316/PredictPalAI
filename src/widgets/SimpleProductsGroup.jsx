// components
import SimpleProduct from '@components/SimpleProduct';

// assets
import side1 from '@assets/shoes/1_side.webp';
import back1 from '@assets/shoes/1_back.webp';
import bottom1 from '@assets/shoes/1_bottom.webp';
import side2 from '@assets/shoes/2_side.webp';
import back2 from '@assets/shoes/2_back.webp';
import bottom2 from '@assets/shoes/2_bottom.webp';

const data = [
    {
        id: 1,
        name: 'Nike Free Metcon 4 Training Shoes',
        price: 100,
        rating: 4.5,
        media: [side1, back1, bottom1]
    },
    {
        id: 2,
        name: 'Nike SuperRep Go 3 Flyknit Next Nature',
        price: 120,
        rating: 5,
        media: [side2, back2, bottom2]
    }
]

const SimpleProductsGroup = () => {
    return (
        <div className="d-grid g-20 h-100">
            {
                data.map(product => (
                    <SimpleProduct key={product.id} product={product}/>
                ))
            }
        </div>
    )
}

export default SimpleProductsGroup