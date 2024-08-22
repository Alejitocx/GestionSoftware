import React from 'react';
import '../styles/login.css'; 
import tituloImg from '../images/TITULO.PNG'; // Asegúrate de que esta ruta sea correcta



// Componente Header
  const Header = () => {
    return (
      <header className="header">
        <h1>GOLD</h1>
        <h1>CLUB</h1>
      </header>
    );
  };

// Componente LoginPage
const LoginPage = () => {
  return (
    <div className="login-page">
      <Header /> {/* Incluir el Header aquí */}
      <form className="login-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className="buttons">
          <button type="submit">SIGN IN</button>
          <button type="button">SIGN UP</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;