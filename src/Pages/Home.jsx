import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Recipics from '../Components/Recipics';
import Chef from '../Components/Chef';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            {/* <Recipics></Recipics> */}
            <Chef></Chef>
        </div>
    );
};

export default Home;