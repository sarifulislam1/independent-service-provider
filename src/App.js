import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Banner from './components/Home/Banner/Banner';
import Booking from './components/Home/Booking/Booking'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>
        <Route path='/banner' element={<Banner></Banner>}></Route>
        <Route path='/booking' element={<Booking></Booking>}></Route>
      </Routes>
    </div>
  );
}

export default App;
