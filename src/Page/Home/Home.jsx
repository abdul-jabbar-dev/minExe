import React from 'react';
import Carousel from '../../Components/Home/Carousel';
import CstomerSatisfaction from '../../Components/Home/CstomerSatisfaction';
import HeroSection from '../../Components/Home/HeroSection';
import Service from '../../Components/Home/Service';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Service></Service>
            <Carousel></Carousel>
            <CstomerSatisfaction></CstomerSatisfaction>


        </div>
    );
};

export default Home;