import './App.css';
import LoginPage from '../components/login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductosList from '../components/productos.jsx';
import SignUpForm from '../components/SingUp.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/LoginPage" />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignUpForm" element={<SignUpForm />} />
        <Route path="/ProductosList" element={<ProductosList />} />
      </Routes>
    </Router>
  );
}

export default App;