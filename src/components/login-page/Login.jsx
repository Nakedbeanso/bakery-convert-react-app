import React from 'react'
import './Login.css';
import waves from '../../assets/image/waves.svg';
import logo from '../../assets/image/logo.svg';


const Login = () => {
  return (
  <>
    <div className="login-container">
    <img src={waves} alt="Background waves" className="waves-image" />
      <div className="header">
        <h1>Bakery Time</h1>
        <div className="icon">
          <span role="img" aria-label="bread">
          <img src={logo} alt="" width="100px" height="100px" />
          </span>
        </div>
      </div>
      <div className="login-box">
        <h2>LOGIN</h2>
        <form>
          <div className="input-field">
            <input type="text" placeholder="username" />
          </div>
          <div className="input-field">
            <input type="password" placeholder="password" />
          </div>
          <a href=""><button type="submit">Login</button></a>
        </form>
      </div>
    </div>
  </>
  )
}

export default Login