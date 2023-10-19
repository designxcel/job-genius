import adiBG from '../../assets/images/wave.svg'
import logo from '../../assets/brandLogo/adidas.png'
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Slider from '../../Pages/Slider/Slider';

const Adidas = () => {
    const brandAdidas = useLoaderData();
    // const {photo, name, price} = brandAdidas;
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
                    brandAdidas.map(adiItem =>
                        <div className="card w-96 bg-base-100 shadow-xl p-5">
                        <figure><img className='h-60 w-full' src={adiItem.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title ">{adiItem.name}</h2>
                            <p className='text-lg font-semibold'>Price: {adiItem.price}</p>
                            <div className="card-actions justify-end">
                            <button className="btn bg-cyan-700 hover:bg-orange-500 text-white">Buy Now</button>
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

export default Adidas;