// styling
import styles from './styles.module.scss';

// components
import {Helmet} from 'react-helmet';
import RangeSlider from '@ui/RangeSlider';
import SidebarTrigger from '@ui/SidebarTrigger';
import User from './User';
import Search from './Search';
import TruncatedText from '@components/TruncatedText';

// hooks
import {useWindowSize} from 'react-use';
import {useThemeProvider} from '@contexts/themeContext';
import {useShopProvider} from '@contexts/shopContext';
import useMeasure from 'react-use-measure';
import useStoreRoute from '@hooks/useStoreRoute';

// utils
import PropTypes from 'prop-types';

const TabletHeader = ({title}) => {
    const [ref, {width}] = useMeasure();

    return (
        <div className={`${styles.tablet} d-flex align-items-center justify-content-between g-20`}>
            <div className="d-flex align-items-center flex-1 g-30">
                <SidebarTrigger/>
                <div className="flex-1" ref={ref}>
                    <TruncatedText className={`${styles.title} h2`} text={title} width={width} lines={1}/>
                </div>
            </div>
            <div className="d-flex align-items-center g-20">
                <Search/>
                <User/>
            </div>
        </div>
    )
}

const DesktopHeader = ({title}) => {
    const {width} = useWindowSize();
    const {theme, toggleTheme, fontScale, changeFontScale, direction, toggleDirection} = useThemeProvider();
    const {setCartOpen} = useShopProvider();
    const [ref, {width: titleWidth}] = useMeasure();
    const isStoreRoute = useStoreRoute();

    return (
        <div className={`${styles.desktop} d-flex justify-content-between align-items-center g-20`}>
            <div className="d-flex align-items-center flex-1 g-30">
                {width < 1920 && <SidebarTrigger/>}
                <div className="flex-1" ref={ref}>
                    <TruncatedText className={`${styles.title} h2`} text={title} width={titleWidth} lines={1}/>
                </div>
            </div>
            <div className="d-flex align-items-center">
                <Search/>
                <div className="d-flex g-30" style={{margin: '0 50px'}}>
                    <button className={`${styles.control} h5`} onClick={toggleTheme}>
                        <i className={`icon-${theme === 'light' ? 'moon' : 'sun'}`}/>
                        Theme
                    </button>
                    <button className={`${styles.control} h5`} onClick={toggleDirection}>
                        <i className="icon icon-book-regular"/>
                        {direction === 'ltr' ? 'RTL' : 'LTR'}
                    </button>
                    <div className="d-flex g-16">
                        <span className={`${styles.control} h5`}>
                            <i className="icon-text"/> Font size
                        </span>
                        <RangeSlider value={fontScale}
                                     onChange={e => changeFontScale(e.target.value)}
                                     min={1}
                                     max={1.06}
                                     step={0.01}/>
                    </div>
                    {
                        isStoreRoute &&
                        <button className={`${styles.control} ${styles[direction]} h5`}
                                onClick={() => setCartOpen(true)}>
                            <i className="icon icon-bag-solid"/>
                            <span className={styles.control_indicator}/>
                            Cart (2 items)
                        </button>
                    }
                </div>
                <User/>
            </div>
        </div>
    )
}

const PageHeader = ({title}) => {
    const {width} = useWindowSize();

    return (
        <>
            <Helmet>
                <title>{title} | Soccer AI</title>
            </Helmet>
            {
                width < 1280 ?
                    (
                        width < 768 ?
                            <h1 className={`${styles.title} h2`}>{title}</h1>
                            :
                            <TabletHeader title={title}/>
                    )
                    :
                    <DesktopHeader title={title}/>
            }
        </>
    )
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired
}

export default PageHeader