import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Details = () => {

    const details = useLoaderData()
    const { _id, name, brand, type, price, rating, photo, description} = details;

    
    return (
        <div>
            <Navbar></Navbar>
            
                <div className="h-[70vh] flex justify-center items-center">
                    <div className='w-1/2 flex justify-center items-center'>
                        <img src={photo} className="rounded-lg shadow-2xl w-[550px]" />
                    </div>
                    
                    <div className='w-1/2 space-y-2 text-xl'>
                        <h1 className="text-4xl font-bold">{name}</h1>
                        <p>Brand: {brand}</p>
                        <p>Type: {type}</p>
                        <p className='font-bold'>Price: {price}</p>
                        <p>Description: {description}</p>
                        <p>Rating: {rating}</p>
                        
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-primary">Add to Cart</button>
                        </Link>
                        
                    </div>
                </div>
                <Footer></Footer>
        </div>
    );
};

export default Details;