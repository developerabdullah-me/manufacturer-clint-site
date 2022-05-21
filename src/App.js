
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home/Home';
import Header from './Component/Sheare/Header/Header';
import Login from './Component/User/Login';
import SignUp from './Component/User/SignUp';
import Notfound from './Component/Notfound/Notfound';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/singUp" element={<SignUp></SignUp>}></Route>
       <Route path="*" element={<Notfound></Notfound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
