import saleimg from '../../assets/images/sale.png'
import modelimg from '../../assets/images/model.png'
import banner from '../../assets/images/bannerbg.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='flex flex-col md:flex-row justify-evenly items-center' style={{backgroundImage: `url(${banner})`}}>
            <div>
                <img src={saleimg} alt="" />
            </div>
            <div className='text-center'>
                <h2 className='text-8xl tracking-widest'>ALL KIND</h2>
                <h2 className='text-9xl font-bold tracking-wide text-orange-500'>FASHION</h2>
                <h2 className='text-8xl'>COLLECTION</h2>

                <Link to="/allproducts">
                <button className='btn btn-block bg-cyan-700 text-white hover:bg-orange-500 tracking-widest text-2xl'>ORDER NOW</button>
                </Link>
                
            </div>
            <div>
                <img className='h-[800px]' src={modelimg} alt="" />
            </div>
        </div>
    );
};

export default Header;