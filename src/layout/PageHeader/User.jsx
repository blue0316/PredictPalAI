import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch from react-redux
import { useWindowSize } from "react-use";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import useSubmenu from "@hooks/useSubmenu";
import useStoreRoute from "@hooks/useStoreRoute";
import { useShopProvider } from "@contexts/shopContext";

import { logout as firebaseLogout } from "../../firebase/auth";

import { logout as reduxLogout } from "../../features/users/userSlice";

import Submenu from "@ui/Submenu";
import SettingsPopup from "@layout/BottomNav/SettingsPopup";
import userPic from "@assets/user.webp";
import styles from "./styles.module.scss";

const User = () => {
  const profile = useSelector((state) => state.user?.profile);

  const [popupOpen, setPopupOpen] = useState(false);
  const { anchorEl, open, handleClick, handleClose } = useSubmenu();
  const isTablet = useWindowSize().width < 1280;
  const isStoreRoute = useStoreRoute();
  const { setCartOpen } = useShopProvider();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await firebaseLogout();

      dispatch(reduxLogout());

      navigate("/login");

      console.log("User logged out successfully");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const settingsPopup = {
    label: "UI Settings",
    icon: "gear-solid",
    onClick: () => setPopupOpen(true),
  };

  const submenuActions = [
    {
      label: "Change user",
      icon: "users-two",
    },
    {
      label: "Logout",
      icon: "exit",
      onClick: handleLogout,
    },
  ];

  return (
    <div className="d-flex align-items-center g-16">
      <div className={styles.avatar}>
        <img
          className="c-pointer"
          src={profile?.Avatar || userPic}
          alt="user"
          onClick={handleClick}
        />
        {isStoreRoute && isTablet && (
          <button
            className={styles.avatar_cart}
            aria-label="Shopping cart"
            onClick={() => setCartOpen(true)}
          >
            <i className="icon-bag-solid" />
          </button>
        )}
      </div>
      <div className="d-flex flex-column">
        <span
          className="h4"
          style={{
            maxWidth: "120px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            letterSpacing: 0.2,
          }}
        >
          {profile?.Name || "Anonymous User"}
        </span>
        {profile?.Country && (
          <span className="text-12">{`${
            profile?.City ? `${profile?.City.label}, ` : ""
          }${profile?.Country.label}`}</span>
        )}
      </div>
      <Submenu
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        actions={isTablet ? [settingsPopup, ...submenuActions] : submenuActions}
      />
      <SettingsPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default User;
