import React from 'react';
import './App.css';
import SignupScene from './scenes/SignupScene';

import LoginScene from './scenes/LoginScene';



import ProfileTemplate from './templates/ProfileTemplate';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginScene/>}/>
      <Route path="/login" element={<LoginScene />}/>
      <Route path="/signup" element={<SignupScene />}/>
      <Route path="/profile" element={<ProfileTemplate/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
