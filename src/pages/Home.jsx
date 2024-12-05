import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import ExtraSection from '../components/ExtraSection';
import SportsCategory from '../components/SportsCategory';
import Product from '../components/Product';

const Home = () => {
    return (
   <div>
  <Navbar/>
            <main className='w-11/12 mx-auto my-8'>
           <Banner/>
           <SportsCategory/>
           <Product/>
           <ExtraSection/>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;