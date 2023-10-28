import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Root from '../Pages/Root/Root';
import AddProducts from '../Pages/AddProducts/AddProducts';
import Brand from '../Pages/Brand/Brand';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';
import UpdateProduct from '../Pages/UpdateProduct/UpdateProduct';
import AllProducts from '../Pages/AllProducts/AllProducts';
import Adidas from '../AllBrands/Adidas/Adidas';
import Puma from '../AllBrands/Puma/Puma';
import Nike from '../AllBrands/Nike/Nike';
import Gucci from '../AllBrands/Gucci/Gucci';
import Levis from '../AllBrands/Levis/Levis';
import Zara from '../AllBrands/Zara/Zara';
import Details from '../Pages/Details/Details';
import Error from '../Pages/Error/Error';
import Blog from '../Pages/Blog/Blog';
import CheckOut from '../Pages/CheckOut/CheckOut';
import Cart from '../Pages/Cart/Cart';

const Router = createBrowserRouter([
    {
        path : "/",
        element : <Root></Root>,
        errorElement: <Error></Error>,
        children : [
            {
                path : "/", 
                element : <Home></Home>,
                loader :() => fetch('http://localhost:5000/brand')
            },
            {
                path : "/addproducts",
                element : <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            },
            
            {
                path: "/updateproduct/:id",
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: "/details/:id",
                element : <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)

            },
            {
                path :"/brand",
                element :<Brand></Brand>
                
            },
            {
                path: "/brand/adidas",
                element : <Adidas></Adidas>,
                loader : () => fetch('https://fashion-brand-server-side.vercel.app/product/adidas')
            },
            {
                path: "/brand/puma",
                element : <Puma></Puma>,
                loader : () => fetch('https://fashion-brand-server-side.vercel.app/product/puma')
            },
            {
                path: "/brand/nike",
                element : <Nike></Nike>,
                loader : () => fetch('https://fashion-brand-server-side.vercel.app/product/nike')
            },
            {
                path: "/brand/gucci",
                element : <Gucci></Gucci>,
                loader : () => fetch('https://fashion-brand-server-side.vercel.app/product/gucci')
            },
            {
                path: "/brand/levis",
                element : <Levis></Levis>,
                loader : () => fetch('https://fashion-brand-server-side.vercel.app/product/levis')
            },
            {
                path: "/brand/zara",
                element : <Zara></Zara>,
                loader : () => fetch('https://fashion-brand-server-side.vercel.app/product/zara')
            },
            {
                path :"/login",
                element : <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/allproducts",
                element: <AllProducts></AllProducts>,
                loader : () => fetch('http://localhost:5000/product')
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/checkout/:id",
                element: <CheckOut></CheckOut>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: "/cart",
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            }
        ]
    }
])
export default Router;