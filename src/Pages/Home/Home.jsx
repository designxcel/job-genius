import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, useLoaderData } from 'react-router-dom';
import BrandCard from '../BrandCard/BrandCard';
import Delivery from '../Delivery/Delivery';
import BrandName from '../BrandName/BrandName';

const Home = () => {
    const brands = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div className='h-auto'>
                <h2 className='text-center font-bold text-5xl mt-16'>All Brands</h2>
                <div className='max-w-3xl mx-auto'>
                    <p className='text-center mt-5 text-gray-400'>Clothing describes the material and the technical garment, devoid of any social meaning or connections; costume has come to mean fancy dress or masquerade wear.</p>
                    <hr />
                </div>
                    
                <div className='p-10 max-w-7xl mx-auto'>
                    <BrandName></BrandName>
                </div>
            </div>
            <Delivery></Delivery>
            <Footer></Footer>
        </div>
    );
};

export default Home;