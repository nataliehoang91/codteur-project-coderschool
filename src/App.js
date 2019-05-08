import React from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div>
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
