import { useContext } from 'react';

import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import userIcon from '../../assets/images/user.png'

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleSignOut = () =>{
        logOut()
        .then(result => {
            Swal.fire({
                title: 'Success!',
                text: 'logged out Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })
        .catch(error => {
            console.log(error)
        })
    }
    const menus = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addproducts">Add Products</NavLink></li>
        <li><NavLink to="/blog">Blogs</NavLink></li>
        <li><NavLink to="/login">Login/Register</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 px-4">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {menus}
                </ul>
                </div>
                <Link to="/">
                <h2 className='font-bold text-4xl text-orange-500'>MENZWO OPTION</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {menus}
                </ul>
            </div>
            <div className="navbar-end">

                
                
                {
                    user ?
                    <button onClick={handleSignOut} className="btn btn-primary">SignOut</button>
                    :
                    <Link to="/login">
                        <button className="btn btn-primary">Login</button>
                    </Link>
                }
                
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src={userIcon} />
                    </div>
                </label>

                
            </div>
        </div>
    );
};

export default Navbar;