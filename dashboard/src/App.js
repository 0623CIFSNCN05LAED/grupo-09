import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Peliculas from './components/Peliculas';
import Usuarios from './components/Usuarios';
import './assets/css/app.css';

function App() {
  return (
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="peliculas" element={ <Peliculas /> } />
        <Route path="usuarios" element={ <Usuarios /> } />
    </Routes>
  );
}

export default App;
