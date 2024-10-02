// components
import PageHeader from '@layout/PageHeader';
import AppGrid from '@layout/AppGrid';
import ProductDisplay from '@widgets/ProductDisplay';
import ProductDetails from '@widgets/ProductDetails';
import ProductAdditionalInfo from '@widgets/ProductAdditionalInfo';
import StoreSupport from '@widgets/StoreSupport';
import Reviews from '@widgets/Reviews';
import ProductRowCardList from '@widgets/ProductRowCardList';

const widgets = {
    product_display: <ProductDisplay />,
    product_details: <ProductDetails />,
    product_additional: <ProductAdditionalInfo />,
    support: <StoreSupport />,
    reviews: <Reviews standalone />,
    products_list: <ProductRowCardList isSlider />,
}

const ClubSummary = () => {
    return (
        <>
            <PageHeader title="Product Page" />
            <AppGrid id="product" widgets={widgets}/>
        </>
    )
}

export default ClubSummary