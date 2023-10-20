import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const {_id} = useParams();
    const[product, setProduct] = useState(null)

    useEffect(() =>{
        fetch(`https://fashion-brand-server-side.vercel.app/product/${_id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
            console.log(data)
        })
        .catch(error =>{
            console.error(error)
        })
    },[])
    return (
        <div>
            {product ? (
                <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                </div>
                ) : (
                    <p>Loading...</p>
                )}
        </div>
    );
};

export default Details;