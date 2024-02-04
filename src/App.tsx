import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './views/Login/Index';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/login'} element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
