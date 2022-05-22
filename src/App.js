
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


function App() {
  return (
    <div>
     <Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/about" element={<About></About>}></Route>
       <Route path="/myBlog" element={<MyBlog></MyBlog>}></Route>
       <Route path="/MyPortfolio" element={<MyPortfolio/>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/singUp" element={<SignUp></SignUp>}></Route>
       <Route path="*" element={<Notfound></Notfound>}></Route>
       
     </Routes>
     </Header>
     
    </div>
  );
}

export default App;
