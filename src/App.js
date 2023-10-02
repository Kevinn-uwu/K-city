import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'; // Asegúrate de que tu archivo CSS principal esté vinculado
import Inicio from './components/Inicio'; // Importa el componente de inicio
import Album from './components/Album';
import Sidebar from './components/Sidebar';
import Carrito from './components/Carrito'; // Importa el componente del carrito

function App() {
  const [carrito, setCarrito] = useState([]); // Estado para el carrito

  return (
    <div className="App">
      <Sidebar className='sidebar' />
      <main className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Album" element={<Album carrito={carrito} setCarrito={setCarrito} />} />
          <Route path="/Carrito" element={<Carrito carrito={carrito} setCarrito={setCarrito} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
