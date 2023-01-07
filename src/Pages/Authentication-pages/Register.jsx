import React from 'react'
import { Link } from 'react-router-dom'
import '../../Stylesheets/Auth-styles/Auth.css'

import Logo from '../../Assets/Icons/challengeMe-white.svg'
import RegisterFormComponent from './RegisterFormComponent'

const Register = () => {
  return (
    <>
      <section className="auth-form-container">
      <div className="register-image-section">
        <div className="logo">
          <img src={Logo} alt="Challengeme-Logo" />
        </div>
        <div className="link-text">
          <p>www.challengeme.ng</p>
        </div>
      </div>
        <div className="registration-form-section">
          <RegisterFormComponent />
        </div>
      </section>
    </>
  )
}

export default Register