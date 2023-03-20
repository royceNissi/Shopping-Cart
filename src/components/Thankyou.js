import {Link} from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
export default function ThankYouCard() {
    return (
        <div className='thankyou-container'>
            <div className="thank-you-card">
                <h1 className="thank-you">Thank you </h1>
                <p>You will Receive a Confirmation E-mail Soon  </p>
                <Link className='text-black' to='/'><button
                className="go-home"><BsArrowLeft/>Back Home</button>
                </Link>
            </div>
        </div>
    )
}