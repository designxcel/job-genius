import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";



const AllProducts = () => {
    const loadedProducts = useLoaderData()

    
   
    return (
        <div className="p-10">
            <Navbar></Navbar>
            <h2 className="text-center  mb-10 text-5xl font-bold mt-10">All Products: {loadedProducts.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
                {
                    loadedProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;