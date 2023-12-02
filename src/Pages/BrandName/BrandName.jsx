
import { Link } from "react-router-dom";

const BrandName = () => {
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-6">

      <div className="w-44 bg-gray-200 shadow-lg text-center p-5 space-y-2 rounded-b-full">
        <div className="flex justify-center">
          <img className="h-32" src="https://i.ibb.co/y6zvgMV/adidas.png" alt="" />
        </div>
          <h2 className="text-xl font-bold uppercase">Adidas</h2>
        <div>
          <Link to="/adidas">
              <button className="btn bg-cyan-700 hover:bg-orange-500 text-white">Details</button>
          </Link>
        </div>
      </div>

      <div className="w-44 bg-gray-200 shadow-lg text-center p-5 space-y-2 rounded-t-full">
        <div className="flex justify-center">
          <img className="h-32" src="https://i.ibb.co/vcLJZmX/nike.png" alt="" />
        </div>
        <h2 className="text-xl font-bold uppercase">Nike</h2>
        <div>
          <Link to="/nike">
          <button className="btn bg-cyan-700 hover:bg-orange-500 text-white">Details</button>
          </Link>
        </div>
      </div>

      <div className="w-44 bg-gray-200 shadow-lg text-center p-5 space-y-2 rounded-b-full">
        <div className="flex justify-center">
          <img className="h-32" src="https://i.ibb.co/QXSjfLW/puma.png" alt="" />
        </div>
        <h2 className="text-xl font-bold uppercase">Puma</h2>
        <div>
          <Link to="/puma">
            <button className="btn bg-cyan-700 hover:bg-orange-500 text-white">Details</button>
          </Link>
        </div>
      </div>

      <div className="w-44 bg-gray-200 shadow-lg text-center p-5 space-y-2 rounded-t-full">
        <div className="flex justify-center">
          <img className="h-32" src="https://i.ibb.co/27tvP9z/zara.png" alt="" />
        </div>
        <h2 className="text-xl font-bold uppercase">Zara</h2>
        <div>
          <Link to="/zara">
          <button className="btn bg-cyan-700 hover:bg-orange-500 text-white">Details</button>
          </Link>
        </div>
      </div>

      <div className="w-44 bg-gray-200 shadow-lg text-center p-5 space-y-2 rounded-b-full">
        <div className="flex justify-center">
          <img className="h-32" src="https://i.ibb.co/CtxfcLJ/levis.png" alt="" />
        </div>
        <h2 className="text-xl font-bold uppercase">Levis</h2>
        <div>
          <Link to="/levis">
          <button className="btn bg-cyan-700 hover:bg-orange-500 text-white">Details</button>
          </Link>
        </div>
      </div>

      <div className="w-44 bg-gray-200 shadow-lg text-center p-5 space-y-2 rounded-t-full">
        <div className="flex justify-center">
          <img className="h-32" src="https://i.ibb.co/9wS49bF/gucci.png" alt="" />
        </div>
        <h2 className="text-xl font-bold uppercase">Gucci</h2>
        <div>
          <Link to="/gucci">
          <button className="btn bg-cyan-700 hover:bg-orange-500 text-white">Details</button>
          </Link>
        </div>
      </div>

     
    </div>
  );
};

export default BrandName;
