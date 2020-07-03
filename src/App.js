import React from 'react';
import './App.css';
import Nav from "./components/navbar/Navbar"
import OneDay from './components/Oneday';
import FiveDay from './components/Fiveday'


function App() {
  return (
    <div className="App">
      <h3>WEATHER APP</h3>
      <OneDay />
    </div>
  );

}
export default App;