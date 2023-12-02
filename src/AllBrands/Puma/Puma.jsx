import adiBG from '../../assets/images/wave.svg'
import logo from '../../assets/brandLogo/puma.png'
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Slider from '../../Pages/Slider/Slider';
import { useEffect, useState } from 'react';


const Puma = () => {
    const [pumaProducts, setPumaProducts] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/product/puma')
    .then(res => res.json())
    .then(data => {
      setPumaProducts(data)
    })
  }, [])
    return (
        <div>
            <div className='mt-4 ml-10 flex justify-start items-center gap-4'>
                <FaArrowLeft></FaArrowLeft>
                <Link to="/">
                        <h2 className='text-lg underline text-blue-700'>Home / Brand</h2>
                </Link>
            </div>
            <Slider></Slider>
            <div className='max-w-7xl mx-auto'>

<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
    {
        pumaProducts.map(pumaItem =>
            <div key={pumaItem._id} className="card md:w-96 bg-base-100 shadow-xl p-5">
            <figure><img className='h-60 w-full' src={pumaItem.photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title ">{pumaItem.name}</h2>
                <div className='flex justify-between items-center'>
                            <p className='text-lg font-semibold'>Brand: {pumaItem.brand}</p>
                            <p className='text-lg font-semibold'>Type: {pumaItem.type}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='text-lg font-semibold'>Price: {pumaItem.price}</p>
                            <p className='text-lg '>Rating: {pumaItem.rating}</p>
                        </div>
                        <div className="card-actions justify-center items-center">
                            <Link to={`/details/${pumaItem._id}`}>
                                <button className="btn bg-cyan-700 hover:bg-orange-500 text-white">Details</button>
                            </Link>
                            <Link to={`/updateproduct/${pumaItem._id}`}>
                                <button className="btn bg-cyan-700 hover:bg-orange-500 text-white">Update</button>
                            </Link>
                        </div>
            </div>
            </div>
            )
    }
</div>
</div>
        </div>
    );
};

export default Puma;