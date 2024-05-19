import { Link } from "react-router-dom"

function Login () {
  return (
    <div className="login-wrapper">
      <div className="login-block">
        <p className="login-text">Login</p>
        <form className="login-form">
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
        <Link to="/main" className="btn form-btn login-btn">Login</Link>
        </form>
        <ul className="login-actions">
          <li>
            <Link className="login-link" to="/register">Register?</Link>
          </li>
          <li>
            <Link className="login-link" to="/restore-pass">Forgot Password?</Link>
          </li>
        </ul>
      </div>  
    </div>
  )
}

export default Login