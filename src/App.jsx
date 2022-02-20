import React from 'react';
import Layout from './layout/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutPage, HomePage } from './pages';
import { MovieDetails } from './components/';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
