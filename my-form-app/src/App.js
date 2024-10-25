import './App.css';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import Gridd from './Component/Gridd';
import Checkout from './Component/Checkout';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'; // Import NavLink here

function App() {
  return (
    <Router>
      <div className="App">
        <div className='yel'>
          <p className='y'>COD AVAILABLE BY PAYING SMALL ADVANCE, PLEASE CALL OR DROP A WHATSAPP ON +919990769990 AFTER PLACING THE ORDER</p>
        </div>
        <nav>
          <div className="logo">
            <img src='logo.jpeg' alt="Logo" />
          </div>
          <div className="nav-title">
            <h1 className='Tit'>Rider<span>'S</span> Helmet Shop</h1>
          </div>
          <ul className="nav-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><input className='se' type='text' placeholder='search' /></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/gridd" element={<Gridd />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
