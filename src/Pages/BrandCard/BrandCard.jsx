import { Link } from "react-router-dom";


const BrandCard = ({brand}) => {
    // const {photo, name} = brand;


    return (
        <div className="card bg-base-100 shadow-xl h-64 px-4">
            <figure><img className="h-32" src={photo} alt="Brand" /></figure>
            <div className="flex justify-center">
                <h2 className="card-title text-3xl text-orange-500 font-bold tracking-wider">
                {name}
                </h2>
            </div>
            <Link>
                <button className="btn btn-block bg-cyan-700 hover:bg-orange-500 text-white mt-8">View Details</button>
            </Link>
            
        </div>
    );
};

export default BrandCard;