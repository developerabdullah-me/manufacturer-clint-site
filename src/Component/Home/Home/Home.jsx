import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import OurSpecialty from '../OurSpecialty/OurSpecialty';
import Footer from '../../Sheare/Footer/Footer'
import HomeProduct from '../HomeProduct/HomeProduct';
const Home = () => {
    return (
        <div>
           <Banner/>
           <HomeProduct/>
           <OurSpecialty></OurSpecialty>
           <BusinessSummary/>
          
           <Footer></Footer>
        </div>
    );
};

export default Home;