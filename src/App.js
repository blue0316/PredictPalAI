// GA
import ReactGA from "react-ga4";

// utils
import { lazy, Suspense } from "react";

// styles
import ThemeStyles from "@styles/theme";
import "./style.scss";

// libs styles
import "react-toastify/dist/ReactToastify.min.css";
import "react-grid-layout/css/styles.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// fonts
import "@fonts/icomoon/icomoon.woff";

// contexts
import { SidebarProvider } from "@contexts/sidebarContext";
import { ThemeProvider } from "styled-components";

// hooks
import { useThemeProvider } from "@contexts/themeContext";
import { useEffect, useRef } from "react";
import { useWindowSize } from "react-use";
import useAuthRoute from "@hooks/useAuthRoute";

// utils
import { StyleSheetManager } from "styled-components";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { preventDefault } from "@utils/helpers";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

// components
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoadingScreen from "@components/LoadingScreen";
import Sidebar from "@layout/Sidebar";
import BottomNav from "@layout/BottomNav";
import Navbar from "@layout/Navbar";
import ShoppingCart from "@widgets/ShoppingCart";
import ScrollToTop from "@components/ScrollToTop";
import PrivateRoute from "@components/PrivateRoute/PrivateRoute";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout, authCheckComplete } from "@features/users/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./firebase/firebase";

// pages
const ClubSummary = lazy(() => import("@pages/ClubSummary"));
const GameSummary = lazy(() => import("@pages/GameSummary"));
const Championships = lazy(() => import("@pages/Championships"));
const LeagueOverview = lazy(() => import("@pages/LeagueOverview"));
const FansCommunity = lazy(() => import("@pages/FansCommunity"));
const Statistics = lazy(() => import("@pages/Statistics"));
const PageNotFound = lazy(() => import("@pages/PageNotFound"));
const MatchSummary = lazy(() => import("@pages/MatchSummary"));
const MatchOverview = lazy(() => import("@pages/MatchOverview"));
const PlayerProfile = lazy(() => import("@pages/PlayerProfile"));
const Schedule = lazy(() => import("@pages/Schedule"));
const Tickets = lazy(() => import("@pages/Tickets"));
const FootballStore = lazy(() => import("@pages/FootballStore"));
const BrandStore = lazy(() => import("@pages/BrandStore"));
const Product = lazy(() => import("@pages/Product"));
const Login = lazy(() => import("@pages/Login"));
const SignUp = lazy(() => import("@pages/SignUp"));
const Settings = lazy(() => import("@pages/Settings"));

const App = () => {
  const appRef = useRef(null);
  const { theme, direction } = useThemeProvider();
  const { width } = useWindowSize();
  const isAuthRoute = useAuthRoute();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user));
      } else {
        dispatch(logout());
      }
      dispatch(authCheckComplete());
    });

    // Scroll to top on route change
    appRef.current && appRef.current.scrollTo(0, 0);
    preventDefault();

    return () => unsubscribe(); // Cleanup on unmount
  }, [dispatch]);

  // Google Analytics init
  const gaKey = process.env.REACT_APP_PUBLIC_GA;
  gaKey && ReactGA.initialize(gaKey);

  // auto RTL support for Material-UI components and styled-components

  const plugins = direction === "rtl" ? [rtlPlugin] : [];

  const muiTheme = createTheme({
    direction: direction,
  });

  const cacheRtl = createCache({
    key: "css-rtl",
    stylisPlugins: plugins,
  });

  useEffect(() => {
    // scroll to top on route change
    appRef.current && appRef.current.scrollTo(0, 0);

    preventDefault();
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CacheProvider value={cacheRtl}>
        <MuiThemeProvider theme={muiTheme}>
          <SidebarProvider>
            <ThemeProvider theme={{ theme: theme }}>
              <ThemeStyles />
              <ToastContainer
                theme={theme}
                autoClose={2500}
                position={direction === "ltr" ? "top-right" : "top-left"}
              />
              <StyleSheetManager stylisPlugins={plugins}>
                <div
                  className={`app ${isAuthRoute ? "fluid" : ""}`}
                  ref={appRef}
                >
                  <ScrollToTop />
                  {!isAuthRoute && (
                    <>
                      <Sidebar />
                      {width < 768 && <Navbar />}
                      {width < 768 && <BottomNav />}
                    </>
                  )}
                  <div className="app_container">
                    <div className="app_container-content d-flex flex-column flex-1">
                      <Suspense fallback={<LoadingScreen />}>
                        <Routes>
                          <Route path="*" element={<PageNotFound />} />
                          <Route
                            path="/"
                            element={<Navigate to="/login" replace={true} />}
                          />
                          <Route
                            path="/game-summary"
                            element={<GameSummary />}
                          />
                          <Route
                            path="/championships"
                            element={<Championships />}
                          />
                          <Route
                            path="/league-overview"
                            element={<LeagueOverview />}
                          />
                          <Route
                            path="/fans-community"
                            element={<FansCommunity />}
                          />
                          <Route path="/statistics" element={<Statistics />} />
                          <Route
                            path="/match-summary"
                            element={<MatchSummary />}
                          />
                          <Route
                            path="/match-overview"
                            element={<MatchOverview />}
                          />
                          <Route
                            path="/player-profile"
                            element={<PlayerProfile />}
                          />
                          <Route path="/schedule" element={<Schedule />} />
                          <Route path="/tickets" element={<Tickets />} />
                          <Route
                            path="/football-store"
                            element={<FootballStore />}
                          />
                          <Route path="/brand-store" element={<BrandStore />} />
                          <Route path="/product" element={<Product />} />
                          <Route path="/login" element={<Login />} />
                          <Route path="/sign-up" element={<SignUp />} />
                          <Route
                            path="/dashboard"
                            element={
                              <PrivateRoute>
                                <ClubSummary />
                              </PrivateRoute>
                            }
                          />
                          <Route
                            path="/settings"
                            element={
                              <PrivateRoute>
                                <Settings />
                              </PrivateRoute>
                            }
                          />
                        </Routes>
                      </Suspense>
                    </div>
                  </div>
                  <ShoppingCart isPopup />
                </div>
              </StyleSheetManager>
            </ThemeProvider>
          </SidebarProvider>
        </MuiThemeProvider>
      </CacheProvider>
    </LocalizationProvider>
  );
};

export default App;
