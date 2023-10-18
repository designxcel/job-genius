import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Root from '../Pages/Root/Root';
import AddProducts from '../Pages/AddProducts/AddProducts';

const Router = createBrowserRouter([
    {
        path : "/",
        element : <Root></Root>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "addproducts",
                element : <AddProducts></AddProducts>
            }
        ]
    }
])
export default Router;