import React from 'react';
import HeroPage from './HeroPage';
import HomeCategory from './HomeCategory';
import CategoryShowCase from './CategoryShowCase';
import Register from './Register';
import Location from './Location';
import Abts from './Abts';
import AppSec from './AppSec';
import Sponsor from './Sponsor'

const Home = () => {
  return (
    <div>
      <HeroPage />
      <HomeCategory />
      <CategoryShowCase />
      <Register />
      <Location />
      <Abts />
      <AppSec />
      <Sponsor />
      
      
    </div>
  );
};

export default Home;
