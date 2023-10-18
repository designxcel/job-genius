import Footer from "../Footer/Footer";
import bg from '../../assets/images/prodbg.jpg'
import Navbar from "../Navbar/Navbar";


const UpdateProduct = () => {
    const handleUpdateProduct =() =>{

    }
    return (
        <div style={{backgroundImage: `url(${bg})`}} className='bg-cover'>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto py-5'>
                <h2 className='text-7xl font-bold text-center'>Update Product</h2>
                <form onSubmit={handleUpdateProduct} className='mb-10'>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='w-full'>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name= "name" placeholder="Enter Product name" className="input input-bordered" />
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" name="brand" placeholder="Enter Brand name" className="input input-bordered" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='w-full'>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type Of Product</span>
                            </label>
                            <input type="name" name= "type" placeholder="Enter type of product" className="input input-bordered" />
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Enter Price" className="input input-bordered" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='w-full'>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="name" name= "rating" placeholder="Rating" className="input input-bordered" />
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='w-full'>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name= "description" placeholder="Enter product description" className="input input-bordered h-32" />
                            </div>
                        </div>
                    </div>

                    <div className='flex mt-10'>
                        <div className='w-full'>
                            <div className="form-control">
                            
                            <input type="submit" value="Update Product" className='btn btn-block bg-cyan-700 hover:bg-orange-500 text-white' />
                            </div>
                        </div>
                    </div>
                </form>
                <Footer></Footer>
            </div>
       </div>
    );
};

export default UpdateProduct;