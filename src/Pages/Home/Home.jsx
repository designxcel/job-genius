import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import BrandCard from '../BrandCard/BrandCard';

const Home = () => {
    const brands = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div className='h-[50vh]'>
                <h2 className='text-center font-bold text-5xl mt-16'>All Brands</h2>
                <div className='max-w-3xl mx-auto'>
                    <p className='text-center mt-5 text-gray-400'>Clothing describes the material and the technical garment, devoid of any social meaning or connections; costume has come to mean fancy dress or masquerade wear.</p>
                    <hr />
                </div>
                
                <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-5 mt-10'>
                    {
                        brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;