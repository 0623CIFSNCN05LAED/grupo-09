import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Productos from './components/Productos';
import Usuarios from './components/Usuarios';
import Categorias from './components/Categorias';
import './assets/css/app.css';

function App() {
  return (
    <Routes>
        <Route path="/" exact={true} element={ <Home /> } />
        <Route path="productos" exact={true} element={ <Productos /> } />
        <Route path="usuarios" exact={true} element={ <Usuarios /> } />
        <Route path="categorias" exact={true} element={ <Categorias /> } />
    </Routes>
  );
}

export default App;
