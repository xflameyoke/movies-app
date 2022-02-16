import React from 'react';
import Layout from './layout/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/homePage';
import AboutPage from './pages/aboutPage/aboutPage';
import FilmsDetail from './pages/filmsDetail/filmsDetail';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Routes>
        <Route path="/movie/:id" element={<FilmsDetail />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
