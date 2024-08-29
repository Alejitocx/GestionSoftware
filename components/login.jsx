import React, { useState } from 'react';
import '../styles/login.css'; 
import '../styles/singUp.css'; 
import { useNavigate } from 'react-router-dom';
import SignUpForm from './SingUp.jsx'; // Asegúrate de importar el componente SignUpForm
import ProductosList from './productos.jsx'; // Asegúrate de importar el componente ProductosList
import { findUserByEmailAndPassword }  from '../services/singinservice.jsx';


// Componente Header
const Header = () => {
  return (
    <header className="header">
      <h1>GOLD</h1>
      <h1>CLUB</h1>
    </header>
  );
}; 

const LoginForm = ({ email_user, setEmail, password_user, setPassword, errorMessage, onSubmit }) => {
  const [localError, setLocalError] = useState('');

  const validateInput = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email_user)) {
      setLocalError('Invalid email format');
      return false;
    }
    if (password_user.length < 8) {
      setLocalError('Password must be at least 8 characters long');
      return false;
    }
    setLocalError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInput()) {
      onSubmit(); // Llama al manejador de envío pasado desde el componente padre
    }
  };

  return (
    <div>
      <Header />
      <form className="login-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email_user} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password_user} 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
        {localError && <p className="error-message">{localError}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};
const LoginPage = ({ onLogin }) => {
  const [email_user, setEmail] = useState('');
  const [password_user, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignInClick = async () => {
    if (validateInput()) {
      try {
        const user = await findUserByEmailAndPassword(email_user, password_user);
        if (user) {
          alert('Sign in successful');
          setErrorMessage('');
          onLogin(); // Actualiza el estado de autenticación en el componente principal
          navigate('/ProductosList');
        } else {
          setErrorMessage('Invalid email or password');
        }
      } catch (error) {
        setErrorMessage('Error during sign-in, please try again.');
      }
    }
  };

  const handleSignUpClick = () => {
    navigate('/SignUpForm');
  };

  const validateInput = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email_user)) {
      setErrorMessage('Invalid email format');
      return false;
    }
    if (password_user.length < 8) {
      setErrorMessage('Password must be at least 8 characters long');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  return (
    <div className="login-page">
      <LoginForm
        email_user={email_user}
        setEmail={setEmail}
        password_user={password_user}
        setPassword={setPassword}
        errorMessage={errorMessage}
        onSubmit={handleSignInClick}
      />
      <div className="buttonst">
        <button type="button" onClick={handleSignInClick}>
          SIGN IN
        </button>
        <button type="button" onClick={handleSignUpClick}>
          SIGN UP
        </button>
      </div>
    </div>
  );
};


export default LoginPage;