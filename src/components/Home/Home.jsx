import React from 'react';
import Banner from '../Banner/Banner';
import Gadgets from '../Gadgets/Gadgets';

const Home = () => {
    
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;