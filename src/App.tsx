import { ReactElement } from 'react';
import Homepage from './pages/Homepage/Homepage';
import { Route,Routes } from 'react-router-dom';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Navbar from './components/Navbar/Navbar';
import AddProduct from './pages/AddProduct/AddProduct';
import NewProductCard from './components/ProductCard/NewProductCard';
import NewProducts from './pages/Products/NewProducts';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import CartDetail from './pages/CartDetail/CartDetail';
import SignUp from './pages/SignUp/SignUp';
import OverLayLoader from './components/OverLayLoader/OverLayLoader';


function App() :ReactElement {
  return (
    <>
      <OverLayLoader/>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/product-detail/:id" element={<ProductDetail/>}></Route>
        <Route path="/add-product" element={<AddProduct/>}></Route>
        <Route path="/new-products" element={<NewProducts/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cart" element={<CartDetail/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>

        




        


      </Routes>
     
      <Footer/>
    </>
  );
}

export default App;
