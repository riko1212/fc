import { Link } from "react-router-dom"

function RestorePass () {
  return (
    <div className="login-wrapper">
      <div className="login-block">
        <p className="login-text">Restore Pass</p>
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
          placeholder="Enter new password"
        />
        <input
          type="password"
          name="login-pass"
          className="form-input"
          placeholder="Repeat new password"
        />
        {/* <button type="submit" className="btn form-btn ">Let me in</button> */}
        <Link to="/" className="btn form-btn">Let me in</Link>

        </form>
      </div>  
    </div>
  )
}

export default RestorePass