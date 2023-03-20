import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { FaShoppingCart } from 'react-icons/fa';
import {Link} from 'react-router-dom'

export default function Menu() {
  return (
    <>
      <Navbar expand="sm" sticky="top" variant='light' className="navbar">
        <Container>
        <Link className='brand-logo' to='/'>
          <h1>
            ShopMe
          </h1>
        </Link>
        <Nav className="ms-auto navbar-right">
          <Link className='cart-icon' to='/Cart'><FaShoppingCart /></Link>
        </Nav>
        </Container>
      </Navbar>
    </>
  );
}