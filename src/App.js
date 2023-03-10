import './App.css';
// import { useState } from "react";
import Login from './components/Login.js';
import Welcome from './components/wel';
// import fp1 from './components/fp1';
// import axios from "axios";
// import UserInfo from "./components/userslist";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/wel" element={<Welcome />} />
        {/* <Route path="/fp1"element={<fp1/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
