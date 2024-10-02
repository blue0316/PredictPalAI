// components
import PageHeader from '@layout/PageHeader';
import AppGrid from '@layout/AppGrid';
import StoreSupport from '@widgets/StoreSupport';
import ProductColorBars from '@widgets/ProductColorBars';
import BrandProducts from '@widgets/BrandProducts';
import BasicProductDisplay from '@widgets/BasicProductDisplay';
import BrandMenu from '@widgets/BrandMenu';
import ShoppingCart from '@widgets/ShoppingCart';

const widgets = {
    brand_menu: <BrandMenu/>,
    brand_products: <BrandProducts/>,
    product_display: <BasicProductDisplay/>,
    color_bars: <ProductColorBars/>,
    shopping_cart: <ShoppingCart/>,
    support: <StoreSupport/>
}

const BrandStore = () => {
    return (
        <>
            <PageHeader title="Brand store"/>
            <AppGrid id="brand_store" widgets={widgets}/>
        </>
    )
}

export default BrandStore