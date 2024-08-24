import React, { useState } from 'react';
import '../styles/login.css'; 
import SingUpForm  from './SingUp.jsx';
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
const LoginForm = ({ email, setEmail, password, setPassword, errorMessage, onSubmit }) => {
  const [localError, setLocalError] = useState('');

  const validateInput = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setLocalError('Invalid email format');
      return false;
    }
    if (password.length < 8) {
      setLocalError('Password must be at least 8 characters long');
      return false;
    }
    setLocalError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInput()) {
      onSubmit(); // Call the submit handler passed from the parent component
    }
  };

  return (
    <div>
      <Header />
      <form className="login-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
        {localError && <p className="error-message">{localError}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [activeComponent, setActiveComponent] = useState('login'); // 'login' or 'signup'

  const handleSignInClick = async () => {
    // Perform validation and submission here
    if (validateInput()) {
      try {
        const user = await findUserByEmailAndPassword(email, password);
        if (user) {
          alert('Sign in successful');
          setErrorMessage('');
          setActiveComponent(''); // Optionally change component
        } else {
          setErrorMessage('Invalid email or password');
        }
      } catch (error) {
        setErrorMessage('Error during sign-in, please try again.');
      }
    }
  };

  const validateInput = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage('Invalid email format');
      return false;
    }
    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSignUpClick = () => {
    setActiveComponent('signup');
  };

  return (
    <div className="login-page">
      <div className="displayed-component">
        {activeComponent === 'login' && (
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            errorMessage={errorMessage}
            onSubmit={handleSignInClick} // Pass the submit handler
          />
        )}
        {activeComponent === 'signup' && <SingUpForm />}
      </div>
      
      {/* Conditionally show/hide buttons */}
      {activeComponent !== 'signup' && (
        <div className="buttons">
          <button type="button" onClick={handleSignInClick}>
            SIGN IN
          </button>
          <button type="button" onClick={handleSignUpClick}>
            SIGN UP
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;