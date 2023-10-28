import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, useLoaderData } from 'react-router-dom';
import BrandCard from '../BrandCard/BrandCard';
import Delivery from '../Delivery/Delivery';

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
                    
                <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-5 mt-10'>
                    {
                        
                        brands.map(brand => 
                            <div key={brand._id} className="card bg-base-100 shadow-xl h-64 px-4">
                                <figure><img className="h-32" src={brand.photo} alt="Brand" /></figure>
                                <div className="flex justify-center">
                                    <h2 className="card-title text-3xl text-orange-500 font-bold tracking-wider">
                                    {brand.name}
                                    </h2>
                                </div>

                                <Link to={`/brand/${brand.name}`}>
                                    <button className="btn btn-block bg-cyan-700 hover:bg-orange-500 text-white mt-8">
                                    View Details
                                    </button>
                                </Link>
                            </div>
                            
                            ) 
                    }
                    
                    
                </div>
            </div>
            <Delivery></Delivery>
            <Footer></Footer>
        </div>
    );
};

export default Home;