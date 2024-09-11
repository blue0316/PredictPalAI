// components
import {Responsive, WidthProvider} from 'react-grid-layout';
import {withSize} from 'react-sizeme';
import {Fragment} from 'react';

// layouts
import layouts from '../layouts';

// hooks
import {useThemeProvider} from '@contexts/themeContext';
import {useWindowSize} from 'react-use';
import {useMemo} from 'react';

// utils
import PropTypes from 'prop-types';

const AppGrid = ({widgets, id}) => {
    // memoize the grid to prevent unnecessary re-renders
    const ResponsiveGridLayout = useMemo(() =>
            withSize({refreshMode: 'debounce'})(WidthProvider(Responsive)),
        []);

    const {fontScale} = useThemeProvider();
    const {width} = useWindowSize();
    const breakpoints = {
        md: width >= 768 && width < 1280,
        lg: width >= 1280 && width < 1500,
        xl: width >= 1500
    }

    return (
        <div className="layout">
            {
                width >= 768 ?
                    <ResponsiveGridLayout
                        className="w-100"
                        layouts={layouts[id]}
                        breakpoints={breakpoints}
                        cols={{xl: 4, lg: 3, md: 2}}
                        rowHeight={fontScale === 1 ? 220 : 220 + (fontScale * 3)}
                        isDraggable={false}
                        isResizable={false}
                        margin={[25, 20]}
                        autoSize={true}
                        useCSSTransforms={false}
                    >
                        {
                            Object.keys(widgets).map(widget => (
                                <div key={widget}>
                                    {widgets[widget]}
                                </div>
                            ))
                        }
                    </ResponsiveGridLayout>
                    :
                    <>
                        {
                            Object.keys(widgets).map(widget => (
                                <Fragment key={widget}>
                                    {widgets[widget]}
                                </Fragment>
                            ))
                        }
                    </>
            }
        </div>
    )
}

AppGrid.propTypes = {
    widgets: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
}

export default AppGrid