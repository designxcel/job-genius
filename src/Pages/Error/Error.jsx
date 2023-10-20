import { Link } from 'react-router-dom';
import error from '../../assets/404/404.gif'

const Error = () => {
    return (
       <div>
         <div className=' flex justify-center items-center h-[80vh]'>
            <img src={error} alt="" />
        </div>

        <div className='flex justify-center items-center '>
            <Link to="/">
                <button className='btn bg-cyan-700 hover:bg-orange-500 text-white'>GO HOME</button>
            </Link>
        </div>
       </div>
    );
};

export default Error;