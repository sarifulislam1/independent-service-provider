import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Banner from './components/Home/Banner/Banner';
import Booking from './components/Home/Booking/Booking'
import About from './components/About/About'
import Blogs from './components/Blogs/Blogs'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>
        <Route path='/banner' element={<Banner></Banner>}></Route>
        <Route path='/booking' element={<Booking></Booking>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
