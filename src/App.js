
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home/Home';
import Header from './Component/Sheare/Header/Header';
import Login from './Component/User/Login';
import SignUp from './Component/User/SignUp';
import Notfound from './Component/Notfound/Notfound';
import About from './Component/About/About';
import MyBlog from './Component/MyBlog/MyBlog';
import MyPortfolio from './Component/MyPortfolio/MyPortfolio';
import Dashboard from './Component/Dashboard/Dashboard';
import MyProfile from './Component/Dashboard/MyProfile';
import MyOrder from './Component/Dashboard/MyOrder';
import AddedReview from './Component/Dashboard/AddedReview';
import AddProduct from './Component/Dashboard/AddProduct';
import ManageItems from './Component/ManageItems/ManageItems';
import Purchase from './Component/Purchase/Purchase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Component/Sheare/RequireAuth/RequireAuth';
import MyAddedItems from './Component/Dashboard/MyAddedItems';
import UpdateProfile from './Component/Dashboard/UpdateProfile';
import Allurer from './Component/Dashboard/Addmin/Allurer';
import PayMent from './Component/Dashboard/PayMent/PayMent';


function App() {
  return (
    <div>
     <Header>
     <Routes>
        <Route path="/" element={<Home></Home>}></Route>
       
        <Route path="/purchase/:Id" element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/myBlog" element={<MyBlog></MyBlog>}></Route>
        <Route path="/manageItems" element={<ManageItems/>}></Route>
        <Route path="/MyPortfolio" element={<MyPortfolio/>}></Route>
         <Route path="/updateProfile" element={<UpdateProfile/>}></Route>
         <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}>

         <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
         <Route path="myOrder" element={<MyOrder></MyOrder>}></Route>
         <Route path="addedReview" element={<AddedReview/>}></Route>
         <Route path="addProduct" element={<AddProduct/>}></Route>
         <Route path="myAddedItems" element={<MyAddedItems/>}></Route>
         <Route path="allUser" element={<Allurer></Allurer>}></Route>
         <Route path="payMent/:Id" element={<PayMent></PayMent>}></Route>
         
       </Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/singUp" element={<SignUp></SignUp>}></Route>
       <Route path="*" element={<Notfound></Notfound>}></Route>
       
     </Routes>
     </Header>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
