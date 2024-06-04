import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Contactanos from './components/Contactanos';
import Nosotros from './components/Nosotros';
import AdminPage from './components/AdminPage';
import './assets/styles.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/admin" element={<AdminPage />} />
        </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
