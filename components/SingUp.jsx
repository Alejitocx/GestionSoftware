import React, { useEffect, useState } from 'react';
import '../styles/singUp.css'; 
import { signUp } from '../services/singupservice.jsx';

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
  const [email_user, setEmail] = useState('');
  const [employe_code, setCodeEmploye] = useState('');
  const [password_user, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email_user)) {
      errors.email_user = 'Ingrese un correo electrónico válido';
    }

    if (employe_code.trim() === '') {
      errors.employe_code = 'Ingrese un código de empleado válido';
    }

    if (!passwordRegex.test(password_user)) {
      errors.password_user = 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      try {
        // Ensure the order of parameters matches what the backend expects
        const response = await signUp(employe_code, email_user, password_user);
        setErrors({});
        setMessage('Registro Exitoso');
      } catch (error) {
        if (error.response && error.response.data) {
          setMessage(error.response.data);
        } else {
          setMessage('Registro fallido. Por favor, inténtelo de nuevo.');
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="sign-up-form">
        <Header />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email_user}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email_user && <p style={{ color: 'red' }}>{errors.email_user}</p>}
        
        <input
          type="text"
          placeholder="Código de empleado"
          value={employe_code}
          onChange={(e) => setCodeEmploye(e.target.value)}
        />
        {errors.employe_code && <p style={{ color: 'red' }}>{errors.employe_code}</p>}
        
        <input
          type="password"
          placeholder="Contraseña"
          value={password_user}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password_user && <p style={{ color: 'red' }}>{errors.password_user}</p>}
        
        <div className="buttonsUP">
          <button type="submit">Check In</button>
        </div>
        
        {message && <p>{message}</p>}
      </div>
    </form>
  );
};


export default SignUpForm;
