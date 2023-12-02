import { Link } from "react-router-dom";


const ProductCard = ({product}) => {
    const{name, brand, type, price, rating, photo, description, _id} = product;
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl h-[440px]">
                <figure><img className="h-60 w-full p-5" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                            <h2 className="card-title ">{name}</h2>
                            <div className='flex justify-between items-center'>
                            <p className='text-lg font-semibold'>Brand: {brand}</p>
                            <p className='text-lg font-semibold'>Type: {type}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='text-lg font-semibold'>Price: {price}</p>
                            <p className='text-lg '>Rating: {rating}</p>
                        </div>
                        <div className="card-actions justify-center items-center">
                            <Link to={`/details/${_id}`}>
                                <button className="btn bg-cyan-700 hover:bg-orange-500 text-white">Details</button>
                            </Link>
                        </div>
                        </div>
            </div>
        </div>
    );
};

export default ProductCard;