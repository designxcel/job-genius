import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const CartElement = ({itemCart,handleDelete}) => {
    const {_id, name, email, photo, price, brand} = itemCart;
    const {user} = useContext(AuthContext)

    return (
        <div>
          <tr>
              <th>
              <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </th>
              
              
              <td>
                  <div className="avatar">
                    <div className="mask rounded-xl w-24 h-24">
                      {photo && <img src={photo} alt="Avatar Tailwind CSS Component"
                      />}
                    </div>
                  </div>
              </td>

              <td>
                <h2>{name}</h2>
              </td>
              <td>{price}</td>
              <td>{brand}</td>
              <td>{email}</td>

              
            </tr>
        </div>
    );
};

export default CartElement;