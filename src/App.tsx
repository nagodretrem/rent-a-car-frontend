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
import RentalPage from './pages/RentalPage/RentalPage';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() :ReactElement {
  return (
    <>
      
      <Navbar/>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/product-detail/:id" element={<ProductDetail/>}></Route>
        <Route path="/add-product" element={<AddProduct/>}></Route>
    
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cart" element={<CartDetail/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/rental" element={<RentalPage/>}></Route>
        <Route path="/admin" element={<AdminPanel/>}></Route>



        




        


      </Routes>
     
      <Footer/>
    </>
  );
}

export default App;
