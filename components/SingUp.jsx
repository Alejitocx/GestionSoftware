import React from 'react';
import '../styles/login.css'; 
import tituloImg from '../images/TITULO.PNG'; 


  

  
  const LoginForm = () => {
    return (
      <form className="login-form">
        <input type="email" placeholder="email" />
        <input type="int" placeholder="Code Employe" />
        <input type="password" placeholder="Password" />
        <div className="buttons">
          <button type="submit">SIGN IN</button>
          <button type="button">SIGN UP</button>
        </div>
      </form>
    );
  };

export default SingUp;
