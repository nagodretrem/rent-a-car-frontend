import { ReactElement } from 'react';
import Homepage from './pages/Homepage/Homepage';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import SignUp from './pages/SignUp/SignUp';
import RentalPage from './pages/RentalPage/RentalPage';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Profile from './pages/Profile/Profile';
import RentComponent from './components/Rental/RentComponent';
import RentalConfirm from './components/Rental/RentalConfirm';
import OverlayLoader from './components/OverlayLoader/OverlayLoader';
import RentalPayment from './components/Rental/RentalPayment';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import OrderPage from './pages/OrderPage/OrderPage';


function App() :ReactElement {
  return (
    <>
      <OverlayLoader/>
      <Navbar/>
      <ToastContainer />
    
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
    
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/rental" element={<RentalPage/>}></Route>
        <Route path="/admin" element={<AdminPanel/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/rentpage/:carId" element={<RentComponent/>}></Route>
        <Route path="/rentalconfirm" element={<RentalConfirm/>}></Route>
        <Route path="/rentalpayment" element={<RentalPayment/>}></Route>
        <Route path="/updateprofile" element={<UpdateProfile/>}></Route>
        <Route path="/orderpage" element={<OrderPage/>}></Route>







        


        




        




        


      </Routes>
     
      <Footer/>
    </>
  );
}

export default App;
