import adiBG from '../../assets/images/wave.svg'
import logo from '../../assets/brandLogo/nike.png'
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Slider from '../../Pages/Slider/Slider';

const Nike = () => {
    const brandNike = useLoaderData();
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
                brandNike.map(nikeItem =>
                    <div className="card w-96 bg-base-100 shadow-xl p-5">
                    <figure><img className='h-60 w-full' src={nikeItem.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title ">{nikeItem.name}</h2>
                        <div className='flex justify-between items-center'>
                            <p className='text-lg font-semibold'>Brand: {nikeItem.brand}</p>
                            <p className='text-lg font-semibold'>Type: {nikeItem.type}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='text-lg font-semibold'>Price: {nikeItem.price}</p>
                            <p className='text-lg '>Rating: {nikeItem.rating}</p>
                        </div>
                        <div className="card-actions justify-center items-center">
                            <Link>
                                <button className="btn bg-cyan-700 hover:bg-orange-500 text-white">Details</button>
                            </Link>
                            <Link>
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

export default Nike;