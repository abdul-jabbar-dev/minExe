import React from 'react';
import Carousel from '../../Components/Home/Carousel';
import HeroSection from '../../Components/Home/HeroSection';
import Service from '../../Components/Home/Service';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Service></Service>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;