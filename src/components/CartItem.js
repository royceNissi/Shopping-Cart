import { ShopContext } from "./ShopContext";
import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
export default function CartItem(props){
    const {cartItems,addToCart,removeFromCart,updateCartItemCount,remove} = useContext(ShopContext);
    return(
        <div  className="cart-product-card">
            <div className="cart-product">
                <img src={props.product.productImageURL[0]} alt="something" className="cart-product-image"/>
                <p className="cart-product-name">{props.product.productName}</p>
            </div>
            <div className="quantity-buttons">
                <p className="product-price">₹ {props.product.price}</p>
                <button className="decrease-button"
                onClick={()=>removeFromCart(props.product.id)}>-</button>
                <input className="quantity" value={cartItems[props.product.id]} 
                onChange={(e)=>updateCartItemCount(Number(e.target.value),props.product.id)}/>
                <button className="increase-button"
                onClick={()=>addToCart(props.product.id)}>+</button>
                <button className="delete-button" onClick={()=>remove(props.product.id)}>
                <RiDeleteBin6Line/>
                </button>
            </div>
        </div>
    )
}