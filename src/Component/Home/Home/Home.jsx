import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';

import Footer from '../../Sheare/Footer/Footer'
import HomeProduct from '../HomeProduct/HomeProduct';
import OurSpecialty from '../OurSpecialty/OurSpecialty';
import HomeReview from '../HomeReview/HomeReview';

const Home = () => {
    return (
        <div>
           <Banner/>
           <HomeProduct/>
          <OurSpecialty></OurSpecialty>
      
           <BusinessSummary/>
          <HomeReview></HomeReview>
           <Footer></Footer>
        </div>
    );
};

export default Home;