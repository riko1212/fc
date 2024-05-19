import { Link } from "react-router-dom"

function Register () {
  return (
    <div className="login-wrapper">
      <div className="login-block">
        <p className="login-text">Register</p>
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
        <input
          type="password"
          name="login-pass"
          className="form-input"
          placeholder="Repeat password"
        />
        {/* <button type="submit" className="btn form-btn ">Register</button> */}
        <Link to="/" className="btn form-btn">Register</Link>

        </form>
      </div>  
    </div>
  )
}

export default Register