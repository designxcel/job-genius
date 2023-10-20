import { useContext } from 'react';
import signupBG from '../../assets/images/prodbg.jpg'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)

    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        form.reset();
        if(password.length < 6){
            
            Swal.fire({
                title: 'Warning!',
                text: 'Password should be at least 6 characters',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            return;
        }

        else if(!/[A-Z]/.test(password)){
            
            Swal.fire({
                title: 'Warning!',
                text: 'Password should have at least one uppercase letter',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            return;
        }

        else if(!/[!@#$%^&*()]/.test(password)){
            
            Swal.fire({
                title: 'Warning!',
                text: 'Password should have at least one special character',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                const createdAt = result.user?.metadata?.creationTime;
                const user = {email, photo, password, name, createdAt}
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.insertedId){
                        Swal.fire({
                            title: 'Success!',
                        text: 'Account Created Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div style={{backgroundImage: `url(${signupBG})`}} className='bg-cover h-[100vh] flex justify-center items-center'>
    
                <div className="shadow-2xl rounded-lg bg-base-100 w-96 h-auto">
                    <form onSubmit={handleSignUp} className="card-body">    
                    <h1 className="text-5xl font-bold mb-6 text-center">Sigup Here!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" />
                        </div>

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
                            <button className="btn btn-primary">Sigup</button>
                        </div>
                    </form>
                    
                    <div className='text-center mb-10'>
                            <Link to="/login">
                                <p>Already Registered? <span className='text-lg text-orange-500 font-bold'>Signin</span></p>
                            </Link>
                    </div>
                            
                </div>
            
        </div>
    );
};

export default SignUp;