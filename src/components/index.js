import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from './Menu';
import Products from './Products';
import Cart from './Cart';
import ShopContextProvider from './ShopContext';
import Checkout from './Checkout';
export default function Index(){
    return(
      <div>
        <ShopContextProvider>
          <Router>
            <Menu/>
            <Routes>
              <Route path='/' element={<Products />}/>
              <Route path = '/cart'element={<Cart />}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
          </Router>
        </ShopContextProvider>
      </div>
    )
}