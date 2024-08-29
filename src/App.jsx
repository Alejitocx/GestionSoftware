
import './App.css';
import LoginPage from '../components/login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductosList from '../components/productos.jsx';
import SignUpForm from '../components/SingUp.jsx';
import ProtectedRoute from '../components/ProtectedRoute.jsx';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/LoginPage" />} />
        <Route 
          path="/LoginPage" 
          element={<LoginPage onLogin={handleLogin} />} 
        />
        <Route path="/SignUpForm" element={<SignUpForm />} />
        <Route
          path="/ProductosList"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={ProductosList}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

