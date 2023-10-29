import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const CheckOut = () => {
    const product = useLoaderData();
    const {_id, name, price, brand,photo} = product;
    const {user} = useContext(AuthContext)
    const handleCheckout = event =>{
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const pname = form.pname.value;
        const phone = form.phone.value;
        const email = user?.email;
        const price = form.price.value;
        const brand = form.brand.value;

        const orderList = {
            customerName: name,
            phone,
            email,
            photo,
            price: price,
            brand: brand
        }
        console.log(orderList)

        fetch('https://fashion-brand-server-side.vercel.app/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderList)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Order Placed Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div>
            <Navbar></Navbar>
        <div className="">
            <h2>CheckOut: {name}</h2>
        </div>
        <form onSubmit={handleCheckout}>
            <div className="space-y-5 bg-gray-200 p-20 rounded-lg mt-20">
                <div className="flex gap-5">
                    <div className="form-control w-full"> 
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full"> 
                        <input type="text" name="pname" defaultValue={name} placeholder="Product Name" className="input input-bordered" required />
                    </div>
                    
                </div>

                <div className="flex gap-5">
                    <div className="form-control w-full"> 
                        <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full"> 
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />
                    </div>
                </div>

                <div className="flex gap-5">
                    <div className="form-control w-full"> 
                        <input type="text" name="price" placeholder="Price" defaultValue={price} className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full"> 
                        <input type="text" name="brand" placeholder="Brand" defaultValue={brand} className="input input-bordered" required />
                    </div>

                    
                </div>

                <div>
                <textarea placeholder="Your Message" name="message" className="textarea textarea-bordered textarea-lg h-56 w-full" ></textarea> 
                </div>

                <div>
                    <button className="btn bg-red-600 text-white w-full">
                        <h2>Place your Order</h2>
                    </button>
                </div>
            </div>
        </form>
    </div>
    );
};

export default CheckOut;