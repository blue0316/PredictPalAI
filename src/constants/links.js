import {
  faArrowsUpToLine,
  faCommentDots,
  faGear,
  faRankingStar,
  faShop,
  faTable,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const LINKS = [
  {
    title: "Dashboard",
    icon: faTable,
    path: "/dashboard",
  },
  {
    title: "Video Gallery",
    icon: faVideo,
    path: "/video-gallery",
  },
  {
    title: "Attack Planner",
    icon: faArrowsUpToLine,
    path: "/attack-planner",
  },
  {
    title: "Contest",
    icon: faRankingStar,
    path: "/contest",
  },
  // {
  //     title: 'Dashboard',
  //     icon: 'table',
  //     pages: [
  //         {
  //             title: 'Club summary',
  //             path: '/dashboard'
  //         },
  //         {
  //             title: 'Game summary',
  //             path: '/game-summary'
  //         },
  //         {
  //             title: 'Championships',
  //             path: '/championships'
  //         },
  //         {
  //             title: 'League overview',
  //             path: '/league-overview'
  //         },
  //         {
  //             title: 'Fans community',
  //             path: '/fans-community'
  //         },
  //         {
  //             title: 'Statistics',
  //             path: '/statistics'
  //         },
  //         {
  //             title: 'Error page',
  //             path: '/404'
  //         }
  //     ]
  // },
  // {
  //     title: 'Matches',
  //     icon: 'calendar',
  //     pages: [
  //         {
  //             title: 'Match summary',
  //             path: '/match-summary'
  //         },
  //         {
  //             title: 'Match overview',
  //             path: '/match-overview'
  //         }
  //     ]
  // },
  // {
  //     title: 'Profile',
  //     icon: 'users',
  //     pages: [
  //         {
  //             title: 'Login',
  //             path: '/login'
  //         },
  //         {
  //             title: 'Sign up',
  //             path: '/sign-up'
  //         },
  //         {
  //             title: 'Player profile',
  //             path: '/player-profile'
  //         },
  //         {
  //             title: 'Schedule',
  //             path: '/schedule'
  //         },
  //         {
  //             title: 'Tickets',
  //             path: '/tickets'
  //         }
  //     ]
  // },
  {
    title: "Shop",
    icon: faShop,
    path: "/football-store",
    // pages: [
    //     {
    //         title: 'Football store',
    //         path: '/football-store'
    //     },
    //     {
    //         title: 'Brand store',
    //         path: '/brand-store'
    //     },
    //     {
    //         title: 'Product details',
    //         path: '/product'
    //     }
    // ]
  },
  {
    title: "Community",
    icon: faCommentDots,
    path: "/community",
  },
  {
    title: "Settings",
    icon: faGear,
    path: "/settings",
  },
];

export default LINKS;
