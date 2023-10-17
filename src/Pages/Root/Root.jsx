
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='font-mohave'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;