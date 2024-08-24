import React from 'react';
import '../styles/SingUp.css'; 

// Componente Header
const Header = () => {
  return (
    <header className="headeSr">
      <h1>GOLD</h1>
      <h1>CLUB</h1>
    </header>
  );
};

const SignUpForm = () => {
  return (
    <form>
      {/* Añadido la clase "sign-up-form" al primer elemento hijo del formulario */}
      <div className="sign-up-form">
          <Header />
        <input type="email" placeholder="Email" />
        <input type="int" placeholder="Code Employe" />
        <input type="password" placeholder="Password" />
        <div className="buttonsUP">
          <button type="submit">Check In</button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;