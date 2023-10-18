import { useContext } from 'react';
import mainLogo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

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
        {/* <li><NavLink to="/gallery">Gallery</NavLink></li> */}
        <li><NavLink to="/blogs">Blogs</NavLink></li>
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
                <img className='w-52' src={mainLogo} alt="Menz Option" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {menus}
                </ul>
            </div>
            <div className="navbar-end">
                
                {/* <button className="btn btn-primary">View cart</button> */}
                {/* <a className="btn btn-primary">Login</a> */}

                {
                    user ?
                    <button onClick={handleSignOut} className="btn btn-primary">SignOut</button>
                    :
                    <Link>
                    <button className="btn btn-primary">Login</button>
                </Link>
                }
                
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Navbar;