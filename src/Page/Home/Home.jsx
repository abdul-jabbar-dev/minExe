import React from 'react';
import CstomerSatisfaction from '../../Components/Home/CstomerSatisfaction';
import HeroSection from '../../Components/Home/HeroSection';
import Service from '../../Components/Home/Service';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Service></Service>

            <CstomerSatisfaction></CstomerSatisfaction>



        </div>
    );
};

export default Home;