import React from 'react';
import FootballMatchList from '../components/Dashboard/FootBallMatchList';
import HeroSection from '../components/Dashboard/HeroSection';
import Standings from '../components/Dashboard/StandingComponent';
import FollowClubs from '../components/Dashboard/FollowClubs';
import ShopSection from '../components/Dashboard/ShopSection';
import MobileAppSection from '../components/Dashboard/MobileAppSection';
import NewsAndTransferSection from '../components/Dashboard/NewsAndTransferSection';
import Footer from '../components/Dashboard/Footer';
import Sidebar from '../components/Dashboard/Sidebar';
import Header from '@components/Dashboard/Header';

import "../styles/DashboardPage.scss"

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <Header />
      <main>
        <HeroSection />
        <FootballMatchList />
        <Standings />
        <FollowClubs />
        <ShopSection />
        <MobileAppSection />
        <NewsAndTransferSection />
        <Footer />
      </main>
    </div>
  );
};

export default DashboardPage;
