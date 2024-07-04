import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import LoadingPage from './Components/LoadingPage/LoadingPage';
import HappyRentals from './Components/Projects/HappyRentals';
import Ashoppy from './Components/Projects/Ashoppy';

const App = () => { 
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
    {loading ? (<LoadingPage/>) :(
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects/Ashoppy.in' element={<Ashoppy />} />
        <Route path='/projects/HappyRentals' element={<HappyRentals />} />
      </Routes>
    )}
    </BrowserRouter>
  )
}

export default App