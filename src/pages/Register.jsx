import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.elements['login-name'].value;
    const password = e.target.elements['login-pass'].value;
    const repeatPassword = e.target.elements['login-pass-repeat'].value;

    if (!password) {
      setErrorMessage('Please enter a password');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long');
      return;
    }

    if (password !== repeatPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find((user) => user.name === name);
    if (existingUser) {
      setErrorMessage('User with this name already exists');
      return;
    }

    const newUser = { name, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = '/fc';
  };

  return (
    <div className="login-wrapper">
      <div className="login-block">
        <p className="login-text">Register</p>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form className="login-form" onSubmit={handleRegister}>
          <input
            type="text"
            name="login-name"
            className="form-input"
            placeholder="Enter name"
            required
          />
          <input
            type="password"
            name="login-pass"
            className="form-input test"
            placeholder="Enter password"
            required
          />
          <input
            type="password"
            name="login-pass-repeat"
            className="form-input"
            placeholder="Repeat password"
            required
          />
          <button type="submit" className="btn form-btn">
            Register
          </button>
          <Link to="/" className="btn form-btn">
            Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
