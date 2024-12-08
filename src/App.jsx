import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Andijon from './pages/Andijon';
import Fergona from './pages/Fergana';
import Buxoro from './pages/Buxoro';
import Jizzax from './pages/Jizzax';
import Qashqadaryo from './pages/Qashqadaryo';
import Xorazm from './pages/Xorazm';
import Namangan from './pages/Namangan';
import Navoiy from './pages/Navoiy';
import Samarqand from './pages/Samarqand';
import Surxondaryo from './pages/Surxondaryo';
import Sirdaryo from './pages/Sirdaryo'; // Make sure this file exists
import Toshkent from './pages/Toshkent';

function App() {
  return (
    <div>
      <main className="main">
        <div className="container main__container">
          <div className="nav-list">
            <NavLink className="nav-list-link" to="/andijon">
              Andijon
            </NavLink>
            <NavLink className="nav-list-link" to="/fergana">
              Ferg'ona
            </NavLink>
            <NavLink className="nav-list-link" to="/buxoro">
              Buxoro
            </NavLink>
            <NavLink className="nav-list-link" to="/jizzax">
              Jizzax
            </NavLink>
            <NavLink className="nav-list-link" to="/qashqadaryo">
              Qashqadaryo
            </NavLink>
            <NavLink className="nav-list-link" to="/xorazm">
              Xorazm
            </NavLink>
            <NavLink className="nav-list-link" to="/namangan">
              Namangan
            </NavLink>
            <NavLink className="nav-list-link" to="/navoiy">
              Navoiy
            </NavLink>
            <NavLink className="nav-list-link" to="/samarqand">
              Samarqand
            </NavLink>
            <NavLink className="nav-list-link" to="/surxondaryo">
              Surxondaryo
            </NavLink>
            <NavLink className="nav-list-link" to="/sirdaryo">
              Sirdaryo
            </NavLink>
            <NavLink className="nav-list-link" to="/toshkent">
              Toshkent
            </NavLink>
          </div>
        </div>
      </main>

      <Routes>
        <Route path="/andijon" element={<Andijon />} />
        <Route path="/fergana" element={<Fergona />} />
        <Route path="/buxoro" element={<Buxoro />} />
        <Route path="/jizzax" element={<Jizzax />} />
        <Route path="/qashqadaryo" element={<Qashqadaryo />} />
        <Route path="/xorazm" element={<Xorazm />} />
        <Route path="/namangan" element={<Namangan />} />
        <Route path="/navoiy" element={<Navoiy />} />
        <Route path="/samarqand" element={<Samarqand />} />
        <Route path="/surxondaryo" element={<Surxondaryo />} />
        <Route path="/sirdaryo" element={<Sirdaryo />} />
        <Route path="/toshkent" element={<Toshkent></Toshkent>}></Route>
      </Routes>
    </div>
  );
}

export default App;
