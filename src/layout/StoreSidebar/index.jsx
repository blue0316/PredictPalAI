// components
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import StoreCategories from '@widgets/StoreCategories';
import StorePriceFilter from '@widgets/StorePriceFilter';
import StoreSizesSelector from '@widgets/StoreSizesSelector';
import StoreColors from '@widgets/StoreColors';

// hooks
import {useShopProvider} from '@contexts/shopContext';

const StoreSidebar = () => {
    const {filtersOpen, setFiltersOpen} = useShopProvider();

    return (
        <SwipeableDrawer
            anchor="left"
            open={filtersOpen}
            onClose={() => setFiltersOpen(false)}
            onOpen={() => setFiltersOpen(true)}
            sx={{
                '& .MuiDrawer-paper': {
                    width: '100%',
                    maxWidth: 414,
                    backgroundColor: 'var(--widget)',
                    padding: '40px 30px',
                    color: 'var(--text)',
                }
            }}
        >
            <div className="d-flex align-items-center justify-content-between" style={{marginBottom: 40}}>
                <h2>Filters</h2>
                <button className="h3" onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                    <i className="icon icon-xmark"/>
                </button>
            </div>
            <div className="d-flex flex-column g-30">
                <StoreCategories standalone={false}/>
                <StorePriceFilter standalone={false}/>
                <StoreSizesSelector standalone={false}/>
                <StoreColors standalone={false}/>
            </div>
        </SwipeableDrawer>
    )
}

export default StoreSidebar