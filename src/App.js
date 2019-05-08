import React from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import MainContent from "./components/Main/MainContent";
import Footer from "./components/Main/Footer";

function App() {
  return (
    <div>
    <div className="d-inline-block">
      <Navigation/>
      </div>
      <div className="d-inline-block">
    
      <MainContent/>
      
      </div>
      <div className="d-inline">

        <Footer />
      </div>
    </div>
  );
}

export default App;
