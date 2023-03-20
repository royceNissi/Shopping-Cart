import {Link} from 'react-router-dom';
import { HiShoppingBag } from "react-icons/hi";
export default function EmptyCart(){
    return(
        <div className='empty-container'>
            <div className='empty-card'>
            <HiShoppingBag className='shopping-bag'/>
            <h3>Your cart is currently empty</h3>
            <Link className='text-black' to='/'>
                <button className="go-home">
                    Start Shopping
                </button>
            </Link>
        </div>
        </div>
    )
}