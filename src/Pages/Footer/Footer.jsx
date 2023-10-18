import mainLogo from '../../assets/images/logo.png'
import logoIcon from '../../assets/images/icon1.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content flex flex-col md:flex-row justify-around items-center">
                <div>
                    <img className='w-32' src={logoIcon} alt="" />
                    <h2 className='font-bold text-4xl tracking-wider text-orange-500'>MENZ OPTION</h2>
                    <p className='text-lg'>You are already famous, just put your best clothes on.</p>
                </div>
                <div>
                    <header className="footer-title">Newsletter</header>
                    <form className='space-y-4'>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full pr-16" /> 
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
                        <input type="text" placeholder="Your Message" className="h-28 input input-bordered w-full pr-16" /> 
                        <input className="btn btn-block bg-cyan-700 hover:bg-orange-500 text-white" type="submit" value="Send Message"/> 
                    </form>
                </div>
            </footer>

            <aside className='h-10 flex justify-center items-center'>
                <p className='text-gray-500'>Copyright © 2023 - All right reserved by MENZ OPTION</p>
            </aside>
        </div>
    );
};

export default Footer;