// styled components
import {
  Link,
  SingleLink,
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledDrawer,
} from "./styles";

// components
import Logo from "@components/Logo";
import { NavLink, useLocation } from "react-router-dom";

// hooks
import { useSidebar } from "@contexts/sidebarContext";
import { useWindowSize } from "react-use";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// constants
import LINKS from "@constants/links";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SidebarLeagueList from "@components/SidebarLeagueList";
import SidebarFavClubList from "@components/SidebarFavClubList";

const Sidebar = () => {
  const { open, setOpen } = useSidebar();

  const [expanded, setExpanded] = useState(undefined);
  const { pathname } = useLocation();
  const { width } = useWindowSize();

  // manually handle accordion expansion
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // collapse opened accordion on route change when the drawer is temporary
  useEffect(() => {
    width < 1280 && setExpanded(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <StyledDrawer
      variant={width < 1920 ? "temporary" : "permanent"}
      anchor="left"
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: 250,
        },
      }}
      className="main-sidebar gap-5"
    >
      <div className="logo-wrapper">
        <Logo size="sm" />
      </div>
      <h3 className="text-14 font-normal uppercase">MENU</h3>
      <nav className="flex flex-col gap-4 flex-1">
        {LINKS.map((link, index) =>
          link.pages && link.pages.length > 0 ? (
            <StyledAccordion
              key={`link-${index}-${link.title}`}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <StyledAccordionSummary>
                <Link
                  className={`${
                    expanded === `panel${index}` ? "active" : ""
                  } flex h4 font-medium text-16`}
                >
                  {/* <i className={`icon icon-${link.icon}`} /> */}
                  <FontAwesomeIcon
                    icon={link.icon}
                    size="lg"
                    className="pr-4 w-6 flex justify-items-center"
                  />{" "}
                  {link.title}
                </Link>
                {/* <i className="icon icon-chevron-down" /> */}
                <FontAwesomeIcon icon={faChevronDown} size="sm" />
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                {link.pages.map((page) => (
                  <NavLink to={page.path} key={page.title}>
                    {page.title}
                  </NavLink>
                ))}
              </StyledAccordionDetails>
            </StyledAccordion>
          ) : (
            <StyledAccordionSummary key={`link-${index}-${link.title}`}>
              <NavLink
                className={`${
                  pathname === link.path ? "!text-accent" : ""
                } flex h4 font-medium text-16`}
                to={link.path}
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  size="lg"
                  className="pr-4 w-6 flex justify-items-center"
                />{" "}
                {link.title}
              </NavLink>
            </StyledAccordionSummary>
          )
        )}
      </nav>
      {/* <SidebarLeagueList />
      <SidebarFavClubList /> */}
    </StyledDrawer>
  );
};

export default Sidebar;
