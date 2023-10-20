import mainLogo from '../../assets/images/logo.png'
import logoIcon from '../../assets/images/icon1.png'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleNewsLetter =e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const newsletter = {name, email, message}
        form.reset();

        fetch('http://localhost:5000/newsletter',{
            method : 'POST',
            headers : {
                'content-type':'application/json'
            },
            body: JSON.stringify(newsletter)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'NewsLetter sent Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content flex flex-col md:flex-row justify-around items-center">
                <div>
                    <Link to="/">
                    <img className='w-32' src={logoIcon} alt="" />
                    </Link>
                    <h2 className='font-bold text-4xl tracking-wider text-orange-500'>MENZWO OPTION</h2>
                    <p className='text-lg'>You are already famous, just put your best clothes on.</p>
                </div>
                <div>
                    <header className="footer-title">Newsletter</header>
                    <form onSubmit={handleNewsLetter} className='space-y-4'>
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered w-full pr-16" /> 
                        <input type="text" placeholder="username@site.com" name="email" className="input input-bordered w-full pr-16" /> 
                        <input type="text" placeholder="Your Message" name="message" className="h-28 input input-bordered w-full pr-16" /> 
                        <input className="btn btn-block bg-cyan-700 hover:bg-orange-500 text-white" type="submit" value="Send Message"/> 
                    </form>
                </div>
            </footer>

            <aside className='h-10 flex justify-center items-center'>
                <p className='text-gray-500'>Copyright © 2023 - All right reserved by MENZWO OPTION</p>
            </aside>
        </div>
    );
};

export default Footer;