import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Productos from './components/Productos';
import Usuarios from './components/Usuarios';
import './assets/css/app.css';

function App() {
  return (
    <Routes>
        <Route path="/" exact={true} element={ <Home /> } />
        <Route path="productos" exact={true} element={ <Productos /> } />
        <Route path="usuarios" exact={true} element={ <Usuarios /> } />
    </Routes>
  );
}

export default App;
