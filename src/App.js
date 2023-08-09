import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Login from './Pages/Login';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import WhatIsJS from './InnerPages/WhatIsJS';
import WhatIsClosure from './InnerPages/WhatIsClosure';
import WhatIsHoisting from './InnerPages/WhatIsHoisting';
import WhatAreVariables from './InnerPages/WhatAreVariables';
import WhatIsFunction from './InnerPages/WhatIsFunction';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/js' element={<WhatIsJS />} />
        <Route path='/closure' element={<WhatIsClosure />} />
        <Route path='/hoisting' element={<WhatIsHoisting />} />
        <Route path='/variables' element={<WhatAreVariables />} />
        <Route path='/function' element={<WhatIsFunction />} />
      </Routes>
    </div>
  )
}

export default App;