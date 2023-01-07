import React from 'react'
import '../../Stylesheets/Auth-styles/Auth.css'

import Logo from '../../Components/Utility-components/Logo'
import RegisterFormComponent from './RegisterFormComponent'

const Register = () => {
  return (
    <>
      <section className="auth-form-container">
      <div className="register-image-section">
        <Logo />
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