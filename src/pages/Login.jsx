import { Link } from 'react-router-dom';

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.elements['login-name'].value;
    const password = e.target.elements['login-pass'].value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(
      (user) => user.name === name && user.password === password
    );
    if (foundUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
      window.location.href = 'fc/#/main';
    } else {
      alert("Неправильне ім'я користувача або пароль");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-block">
        <p className="login-text">Login</p>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            name="login-name"
            className="form-input"
            placeholder="Enter name"
          />
          <input
            type="password"
            name="login-pass"
            className="form-input"
            placeholder="Enter password"
          />
          <button type="submit" className="btn form-btn login-btn">
            Login
          </button>
        </form>
        <ul className="login-actions">
          <li>
            <Link className="login-link" to="/register">
              Register?
            </Link>
          </li>
          <li>
            <Link className="login-link" to="/restore-pass">
              Forgot Password?
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
