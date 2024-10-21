// components
import { Responsive, WidthProvider } from "react-grid-layout";
import { withSize } from "react-sizeme";
import { Fragment, useEffect, useState } from "react";

// layouts
import layouts from "../layouts";

// hooks
import { useThemeProvider } from "@contexts/themeContext";
import { useWindowSize } from "react-use";
import { useMemo } from "react";

// utils
import PropTypes from "prop-types";

const smallHeightPages = ["club_summary", "video_gallery"];

const AppGrid = ({ widgets, id }) => {
  const [rowHeight, setRowHeight] = useState(220);

  // memoize the grid to prevent unnecessary re-renders
  const ResponsiveGridLayout = useMemo(
    () => withSize({ refreshMode: "debounce" })(WidthProvider(Responsive)),
    []
  );

  const { fontScale } = useThemeProvider();
  const { width } = useWindowSize();
  const breakpoints = {
    md: width >= 768 && width < 1280,
    lg: width >= 1280 && width < 1500,
    xl: width >= 1500,
  };

  useEffect(() => {
    if (smallHeightPages.indexOf(id) > -1) setRowHeight(160);
    else setRowHeight(220);
  }, [id]);

  return (
    <div className="layout">
      {width >= 768 ? (
        <ResponsiveGridLayout
          className="w-full"
          layouts={layouts[id]}
          breakpoints={breakpoints}
          cols={{ xl: 4, lg: 2, md: 2 }}
          rowHeight={fontScale === 1 ? rowHeight : rowHeight + fontScale * 3}
          isDraggable={false}
          isResizable={false}
          margin={[20, 20]}
          autoSize={true}
          useCSSTransforms={false}
        >
          {Object.keys(widgets).map((widget) => (
            <div key={widget}>{widgets[widget]}</div>
          ))}
        </ResponsiveGridLayout>
      ) : (
        <>
          {Object.keys(widgets).map((widget) => (
            <Fragment key={widget}>{widgets[widget]}</Fragment>
          ))}
        </>
      )}
    </div>
  );
};

AppGrid.propTypes = {
  widgets: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default AppGrid;
