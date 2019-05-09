import React from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import MainContent from "./components/Main/MainContent";
import Footer from "./components/Main/Footer";

function App() {
  return (
    <div className="d-flex">
    <div className="d-inline-block">
      <Navigation/>
      </div>
      <div className="d-inline-block w-100">
    
      <MainContent/>
      
      </div>
      
    </div>
  );
}

export default App;
