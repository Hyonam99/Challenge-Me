import React from 'react'
import { Link } from 'react-router-dom'
import '../../Stylesheets/Auth-styles/Auth.css'

import Logo from '../../Assets/Icons/challengeMe-white.svg'
import LoginFormComponent from './LoginFormComponent'

const Login = () => {
  return (
    <>
    <section className="auth-form-container">
      <div className="login-image-section">
        <div className="logo">
          <img src={Logo} alt="Challengeme-Logo" />
        </div>
        <div className="link-text">
          <p>www.challengeme.ng</p>
        </div>
      </div>
      <div className="login-form-main-container">
        <LoginFormComponent />
      </div>
    </section>
  </>
)
  
}

export default Login