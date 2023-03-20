import { ShopContext } from "./ShopContext";
import { useContext } from "react";
import { PRODUCTS } from "./Products";
import CartItem from "./CartItem";
import { Link } from 'react-router-dom';
import { MdArrowRightAlt } from "react-icons/md";
import EmptyCart from './EmptyCart.js'
export default function Cart() {
    const { cartItems, TotalCartAmount } = useContext(ShopContext);
    let subTotal = TotalCartAmount();
    return (
        <div className="cart">
            {subTotal > 0
                ?
                <>
                    <h3 className="cart-name">Your Cart</h3>
                    <div className="cart-items">
                        {// eslint-disable-next-line
                            PRODUCTS.map((product) => {
                                if (cartItems[product.id] !== 0) {
                                    return <CartItem key={product.id} product={product} />
                                }
                            })}
                    </div>
                    <div className="checkout">
                        <h6 className="subtotal">Subtotal {`₹${subTotal}.00`}</h6>
                        <Link className='text-black' to='/Checkout'><button
                            onClick={() =>
                                Object.keys(cartItems).forEach(id => {
                                    cartItems[id] = 0;
                                })}
                            className='checkout-button'>Checkout<MdArrowRightAlt /></button>
                        </Link>
                    </div>
                </>
                : <EmptyCart />
            }
        </div>
    )
}