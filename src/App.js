import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import Header from './pages/Header.jsx';
import Login from "./pages/Login.jsx"

const App = () => {
  return (
    <>
  

    <BrowserRouter>
    <Routes> 
      <Route path="/Login" element={<Login />} />
      </Routes>
      <Sidebar>
        <Header/>
        <Routes> 
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<About />} />
          <Route path="/api" element={<Comment />} />
          <Route path="/profile" element={<Analytics />} />
         
        </Routes>  
      </Sidebar>
    
    </BrowserRouter>

    
    </>
  );
};

export default App;