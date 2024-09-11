// styled components
import {
    Link,
    SingleLink,
    StyledAccordion,
    StyledAccordionDetails,
    StyledAccordionSummary,
    StyledDrawer
}
    from './styles';

// components
import Logo from '@components/Logo';
import {NavLink, useLocation} from 'react-router-dom';

// hooks
import {useSidebar} from '@contexts/sidebarContext';
import {useWindowSize} from 'react-use';
import {useEffect, useState} from 'react';

// constants
import LINKS from '@constants/links';

const Sidebar = () => {
    const {open, setOpen} = useSidebar();

    const [expanded, setExpanded] = useState(undefined);
    const {pathname} = useLocation();
    const {width} = useWindowSize();

    // manually handle accordion expansion
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    // collapse opened accordion on route change when the drawer is temporary
    useEffect(() => {
        width < 1280 && setExpanded(undefined);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <StyledDrawer
            variant={width < 1920 ? 'temporary' : 'permanent'}
            anchor="left"
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            sx={{
                '& .MuiDrawer-paper': {
                    width: 250,
                }
            }}
            className="main-sidebar">
            <div className="logo-wrapper">
                <Logo size="sm"/>
            </div>
            <nav className="d-flex flex-column g-8 flex-1">
                {
                    LINKS.map((link, index) => (
                        <StyledAccordion key={link.title}
                                         expanded={expanded === `panel${index}`}
                                         onChange={handleChange(`panel${index}`)}>
                            <StyledAccordionSummary>
                                <Link className={`${expanded === `panel${index}` ? 'active' : ''} h4`}>
                                    <i className={`icon icon-${link.icon}`}/> {link.title}
                                </Link>
                                <i className="icon icon-chevron-down"/>
                            </StyledAccordionSummary>
                            <StyledAccordionDetails>
                                {
                                    link.pages.map(page => (
                                        <NavLink to={page.path} key={page.title}>
                                            {page.title}
                                        </NavLink>
                                    ))
                                }
                            </StyledAccordionDetails>
                        </StyledAccordion>
                    ))
                }
            </nav>
            <SingleLink className={pathname === '/settings' ? 'pinned active' : 'pinned'} as="div">
                <NavLink to="/settings">
                    <Link className={`${pathname === '/settings' ? 'active' : ''} h4`}>
                        <i className="icon icon-sliders"/> Settings
                    </Link>
                </NavLink>
            </SingleLink>
        </StyledDrawer>
    );
}

export default Sidebar