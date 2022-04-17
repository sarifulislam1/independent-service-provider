import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Banner from './components/Home/Banner/Banner';
import About from './components/About/About'
import Blogs from './components/Blogs/Blogs'
import Footer from './components/Footer/Footer'
import Register from './components/Register/Register';
import Login from './Login/Login';
import RequarAuth from './RequarAuth/RequarAuth';
import ChecKout from './components/Checkout/ChecKout';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>
        <Route path='/banner' element={<Banner></Banner>}></Route>
        <Route path='checkout' element={<RequarAuth>
          <ChecKout></ChecKout>
        </RequarAuth>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
