import React, { useState } from 'react';
import Footer from '../Footer/Footer';

const Brand = () => {


    const handleAddBrand = e =>{
        e.preventDefault()
        const form = e.target;

        const photo = form.photo.value;
        const name = form.name.value;

        const newBrand = {photo, name}

        fetch('http://localhost:5000/brand', {
            method : 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newBrand)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div>
            <div className='max-w-4xl mx-auto h-[60vh] bg-base-200 px-10 py-20 mb-10'>
            <h2 className='text-7xl font-bold text-center'>Add Brand</h2>
            <form onSubmit={handleAddBrand} className='mb-10'>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='w-full'>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name= "photo" placeholder="Enter photo url" className="input input-bordered" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='w-full'>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Brand Name</span>
                            </label>
                            <input type="text" name= "name" placeholder="Enter Brand Name" className="input input-bordered" />
                            </div>
                        </div>
                    </div>

                    <div className='flex mt-10'>
                        <div className='w-full'>
                            <div className="form-control">
                            
                            <input type="submit" value="Add Product" className='btn btn-block bg-cyan-700 hover:bg-orange-500 text-white' />
                            </div>
                        </div>
                    </div>
            </form>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Brand;