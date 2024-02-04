import React from 'react';
import './App.css';
import { useAppDispatch, useAppReducer } from './store';
import { Route, Routes } from 'react-router-dom';
import Login from './views/Login/Index';

function App() {
  const counterStore = useAppReducer((store: any) => store.counters);
  const dispatch = useAppDispatch();
  return (
    <>
      <Routes>
        <Route path={'/login'} element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
