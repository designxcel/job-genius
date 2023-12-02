import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';
import { Link, useLoaderData} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Details = () => {
    const{user} = useContext(AuthContext)
    const details = useLoaderData()
    const { _id, name, brand, type, price, rating, photo, description} = details;

    const handleAddToCart = () =>{
        if(user){
            const bookingItem ={
                prodId : _id,
                email: user.email,
                name,
                price,
                brand,
                photo
            }

            fetch('http://localhost:5000/bookings', {
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(bookingItem)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    Swal.fire({
                        title: 'Congratulations!',
                        text: 'Your product has been added to the cart.'
                      })
                }
            })
        }
    }

    
    return (
        <div>
            <Navbar></Navbar>
            
                <div className="h-auto flex justify-center items-center p-10">
                    <div className='w-1/2 flex justify-center items-center'>
                        <img src={photo} className="rounded-lg shadow-2xl md:w-[550px]" />
                    </div>
                    
                    <div className='w-1/2 space-y-2 text-xl'>
                        <h1 className="text-4xl font-bold">{name}</h1>
                        <p>Brand: {brand}</p>
                        <p>Type: {type}</p>
                        <p className='font-bold'>Price: {price}</p>
                        <p>Description: {description}</p>
                        <p> 
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            readOnly
                            />
                        </p>

                        <button onClick={handleAddToCart} className="btn btn-primary mt-10">Add to Cart</button>
                        
                        
                    </div>
                </div>
                <Footer></Footer>
        </div>
    );
};

export default Details;