import { useContext, useState } from "react";
import { ShopContext } from "./ShopContext";
import Something from "./Carousel";
import {Link} from 'react-router-dom';
import { FaCartPlus,FaShoppingCart } from 'react-icons/fa';
import { MdDone } from "react-icons/md";
export default function ProductCard(props){
    const[text,setText] = useState('ADD TO CART');
    const {addToCart,cartItems} = useContext(ShopContext);
    return(
        <div  className="product-card">
            <Something id={props.product.id} imageUrl={props.product.productImageURL}/>
            <h5 className="product-name">{props.product.productName}</h5>
            <p className="product-description">{props.product.description}</p>
            <h6 className="product-price">₹ {props.product.price}</h6>
            {/* <p className="product-cart-quantity">{cartItems[props.product.id]}</p> */}
            <div className="product-card-buttons">
                <button className={cartItems[props.product.id]>0?'add-product-clicked':'add-product'}
                onClick={()=>{
                    setText('ADDED');
                    addToCart((props.product.id));
                }}>
                    {text}{cartItems[props.product.id]===0?
                            <FaCartPlus className="add-to-cart" />
                            :<MdDone className="added"/>} 
                </button>
                {text==='ADDED'?<Link to='/Cart' className='view-cart-button'>
                    <button  className='view-cart-button'>VIEW CART<FaShoppingCart className="view-cart-icon"/></button>
                </Link>:null}
            </div>
        </div>
    )
}