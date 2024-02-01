import { ReactElement } from 'react';
import Homepage from './pages/Homepage/Homepage';
import { Route,Routes } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Navbar from './components/Navbar/Navbar';
import AddProduct from './pages/AddProduct/AddProduct';

import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import CartDetail from './pages/CartDetail/CartDetail';
import SignUp from './pages/SignUp/SignUp';


function App() :ReactElement {
  return (
    <>
      
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/product-detail/:id" element={<ProductDetail/>}></Route>
        <Route path="/add-product" element={<AddProduct/>}></Route>
    
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cart" element={<CartDetail/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>

        




        


      </Routes>
     
      <Footer/>
    </>
  );
}

export default App;
