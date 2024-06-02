// import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.elements['login-name'].value;
    const password = e.target.elements['login-pass'].value;
    const repeatPassword = e.target.elements['login-pass-repeat'].value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find((user) => user.name === name);
    if (existingUser) {
      alert("Користувач з таким ім'ям вже існує");
      return;
    }

    if (password !== repeatPassword) {
      alert('Паролі не співпадають');
      return;
    }

    const newUser = { name, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = '/';
  };

  return (
    <div className="login-wrapper">
      <div className="login-block">
        <p className="login-text">Register</p>
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
            className="form-input"
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
