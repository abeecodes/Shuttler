import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { BusTrackingPage } from './pages/BusTrackingPage';
import NotFoundPage from './pages/NotFoundPage'; // Ensure this import is correct

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tracking/:busId" element={<BusTrackingPage />} />
          <Route path="/404" element={<NotFoundPage />} /> {/* Specific route for 404 */}
          <Route path="*" element={<Navigate to="/404" replace />} /> {/* Catch-all redirects to /404 */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;