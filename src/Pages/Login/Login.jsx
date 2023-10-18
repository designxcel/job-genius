import { useContext } from 'react';
import loginBG from '../../assets/images/prodbg.jpg'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const {signInUser} = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();

        signInUser(email, password)
        .then(result => {
            console.log(result.user)

            navigate(location?.state? location.state : "/")
            
            const user = {
                email,
                lastLoggedAt: result.user.metadata.lastSignInTime
                
            }
            fetch('http://localhost:5000/user', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            })
        })
    }
    return (
        <div  style={{backgroundImage: `url(${loginBG})`}} className='bg-cover h-[100vh] flex justify-center items-center'>
    
                <div className="shadow-2xl rounded-lg bg-base-100 w-96 h-auto">
                    <form onSubmit={handleLogin} className="card-body">    
                    <h1 className="text-5xl font-bold mb-10 text-center">Login Here!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        
                        </div>
                        <div className="form-control mt-10">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    
                    <div className='text-center mb-10'>
                            <Link to="/signup">
                                <p>Do not Have an account? <span className='text-lg text-orange-500 font-bold'>Signup</span></p>
                            </Link>
                    </div>
                            
                </div>
            
        </div>
    );
};

export default Login;