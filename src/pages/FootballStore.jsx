// components
import PageHeader from '@layout/PageHeader';
import AppGrid from '@layout/AppGrid';
import StoreCategories from '@widgets/StoreCategories';
import StorePriceFilter from '@widgets/StorePriceFilter';
import StoreSizesSelector from '@widgets/StoreSizesSelector';
import StoreColors from '@widgets/StoreColors';
import SimpleProductsGroup from '@widgets/SimpleProductsGroup';
import ProductRowCardList from '@widgets/ProductRowCardList';
import ProductVertical from '@widgets/ProductVertical';
import Trigger from '@layout/StoreSidebar/Trigger';

// hooks
import {useWindowSize} from 'react-use';

// utils
import loadable from '@loadable/component';

// dynamic imports
const StoreSidebar = loadable(() => import('@layout/StoreSidebar'));

const desktopWidgets = {
    categories: <StoreCategories/>,
    qty: <StorePriceFilter/>,
    sizes: <StoreSizesSelector/>,
    colors: <StoreColors/>,
    products_group: <SimpleProductsGroup/>,
    products_list: <ProductRowCardList/>,
    product_vertical: <ProductVertical/>
}

const mobileWidgets = {
    trigger: <Trigger/>,
    products_group: <SimpleProductsGroup/>,
    products_list: <ProductRowCardList/>,
    product_vertical: <ProductVertical/>
}

const FootballStore = () => {
    const {width} = useWindowSize();

    return (
        <>
            <PageHeader title="Football store"/>
            <AppGrid id="football_store" widgets={width < 768 ? mobileWidgets : desktopWidgets}/>
            {width < 768 && <StoreSidebar/>}
        </>
    )
}

export default FootballStore