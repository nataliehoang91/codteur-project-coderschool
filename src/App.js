import React from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import MainContent from "./components/Main/MainContent";


function App() {
  return (
    <div className="d-flex">
    <div className="d-inline-block">
      <Navigation/>
      </div>
      <div className="d-inline-block">
    
      <MainContent/>
        
      </div>
      
    </div>
  );
}

export default App;
