import React from 'react';
import Layout from './layout/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/homePage';
import AboutPage from './pages/aboutPage/aboutPage';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
