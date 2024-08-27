import React, { useState } from 'react';
import '../styles/SingUp.css'; 
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
  const [email, setEmail] = useState('');
  const [codeEmploye, setCodeEmploye] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email)) {
      errors.email = 'Ingrese un correo electrónico válido';
    }

    if (codeEmploye.length < 1) {
      errors.codeEmploye = 'Ingrese un código de empleado válido';
    }

    if (!passwordRegex.test(password)) {
      errors.password = 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      const payload = {
        email,
        codeEmploye,
        password,
      };

      try {
        const response = await signUp(payload);
        setMessage(response); // Asumiendo que el backend devuelve un mensaje de éxito
        setErrors({});
      } catch (error) {
        setMessage('Registro fallido. Por favor, inténtelo de nuevo.');
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <input
          type="number"
          placeholder="Código de empleado"
          value={codeEmploye}
          onChange={(e) => setCodeEmploye(e.target.value)}
        />
        {errors.codeEmploye && <p style={{ color: 'red' }}>{errors.codeEmploye}</p>}
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        <div className="buttonsUP">
          <button type="submit">Check In</button>
        </div>
        {message && <p>{message}</p>} {/* Mostrar mensaje de respuesta */}
      </div>
    </form>
  );
};


export default SignUpForm;