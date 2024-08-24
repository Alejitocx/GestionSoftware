import React, { useState } from 'react';
import '../styles/login.css'; 
import SingUpForm  from './SingUp.jsx';


// Componente Header
const Header = () => {
  return (
    <header className="header">
      <h1>GOLD</h1>
      <h1>CLUB</h1>
    </header>
  );
};      

// Componente LoginForm
const LoginForm = () => {
  return (
    <div>
      <Header /> {/* Incluir el Header aquí */}
      <form className="login-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
    </div>
  );
};


const LoginPage = () => {
  const [activeComponent, setActiveComponent] = useState(<LoginForm />);

  const handleSignInClick = () => {
    setActiveComponent(<LoginForm />);
  };

  const handleSignUpClick = () => {
    setActiveComponent(<SingUpForm />);
  };

  return (
    <div className="login-page">
      <div className="displayed-component">
        {activeComponent}
      </div>
      
      {/* Condicional para mostrar/ocultar los botones */}
      {activeComponent.type !== SingUpForm && (
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