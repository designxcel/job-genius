import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const detailProduct = useLoaderData();

    const{_id, name, brand, type, price, rating, photo, description} = detailProduct;

    const handleUpdateProduct =e =>{
        e.preventDefault();

        const form =e.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const updatedProduct = {name, brand, type, price, rating, photo, description}
        
        fetch(`https://menzwo-option-fashion.vercel.app/product/${_id}`,{
            method : 'PUT',
            headers : {
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                // form.reset()
                Swal.fire({
                    title: 'Success!',
                    text: 'Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                
            }
        })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto py-5'>
                <h2 className='text-7xl font-bold text-center'>Update Product: {name}</h2>
                <form onSubmit={handleUpdateProduct} className='mb-10'>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='w-full'>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name= "name" defaultValue={name} placeholder="Enter Product name" className="input input-bordered" />
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" name="brand" defaultValue={brand} placeholder="Enter Brand name" className="input input-bordered" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='w-full'>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type Of Product</span>
                            </label>
                            <input type="name" name= "type" defaultValue={type} placeholder="Enter type of product" className="input input-bordered" />
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={price} placeholder="Enter Price" className="input input-bordered" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='w-full'>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="name" name= "rating" defaultValue={rating} placeholder="Rating" className="input input-bordered" />
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" defaultValue={photo} placeholder="Enter Photo URL" className="input input-bordered" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='w-full'>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name= "description" defaultValue={description} placeholder="Enter product description" className="input input-bordered h-32" />
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