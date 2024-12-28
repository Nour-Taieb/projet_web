import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import MainMenu from './container/MainMenu/MainMenu'; // Import MainMenu
import Signup from './components/Footer/Signup';
import Signin from './components/Footer/Signin';
import './App.css';

const App = () => (
  <Router> {/* Wrap the app in Router */}
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Chef />
      {/* Define routes for SpecialMenu and MainMenu */}
      <Routes>
        <Route path="/" element={<SpecialMenu />} />  {/* This renders SpecialMenu at the root */}
        <Route path="/main-menu" element={<MainMenu />} />  {/* This renders MainMenu when the route is '/main-menu' */}
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  </Router>
);

export default App;
