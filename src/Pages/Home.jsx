import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Recipics from '../Components/Recipics';
import Chef from '../Components/Chef';
import CheckOut from '../Components/CheckOut';
import DeliciousRecipi from '../Components/DeliciousRecipi';
import Inbox from '../Components/Inbox';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Recipics></Recipics>
            <Chef></Chef>
            <CheckOut></CheckOut>
            <DeliciousRecipi></DeliciousRecipi>
            <Inbox></Inbox>
        </div>
    );
};

export default Home;