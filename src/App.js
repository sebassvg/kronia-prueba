import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLayout } from './components/PageLayout';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/movies" element={<PageLayout />}>
        <Route index element={<Movies />} />
      </Route>
      
    </Routes>

  );
}

export default App;
