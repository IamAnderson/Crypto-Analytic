import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './pages/Home';
import CryptoCurrencies from './pages/CryptoCurrencies';
import News from './pages/News';
import CryptoDetails from './pages/CryptoDetails';
import Exchanges from './pages/Exchanges';
import Navbar from './component/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
            <Router>
              <div className='flex flex-col md:flex-row md:items-start'>
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
              <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path='/crypto_currencies' element={ <CryptoCurrencies darkMode /> } />
                <Route path='/news' element={ <News darkMode /> } />
                <Route path='/exchanges' element={ <Exchanges darkMode /> } />
                <Route path='/crypto/:id' element={ <CryptoDetails darkMode /> } />
              </Routes>
              </div>
            </Router>
      </div>
    </>
  );
}

export default App;
