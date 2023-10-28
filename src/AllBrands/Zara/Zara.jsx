import adiBG from '../../assets/images/wave.svg'
import logo from '../../assets/brandLogo/zara.png'
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Slider from '../../Pages/Slider/Slider';

const Zara = () => {
    const brandZara = useLoaderData();
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
                    brandZara.map(zaraItem =>
                        <div className="card md:w-96 bg-base-100 shadow-xl p-5">
                        <figure><img className='h-60 w-full' src={zaraItem.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title ">{zaraItem.name}</h2>
                            <div className='flex justify-between items-center'>
                            <p className='text-lg font-semibold'>Brand: {zaraItem.brand}</p>
                            <p className='text-lg font-semibold'>Type: {zaraItem.type}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='text-lg font-semibold'>Price: {zaraItem.price}</p>
                            <p className='text-lg '>Rating: {zaraItem.rating}</p>
                        </div>
                        <div className="card-actions justify-center items-center">
                            <Link to={`/details/${zaraItem._id}`}>
                                <button className="btn bg-cyan-700 hover:bg-orange-500 text-white">Details</button>
                            </Link>
                            <Link to={`/updateproduct/${zaraItem._id}`}>
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

export default Zara;