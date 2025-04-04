import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Input from './components/Input';
import GetOTP from './components/GetOTP';
import VerifyOTP from './components/VerifyOTP';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="/GetOTP" element={<GetOTP />} />
        <Route path="/VerifyOTP" element={<VerifyOTP />} />
      </Routes>
    </Router>
  );
}

export default App;
