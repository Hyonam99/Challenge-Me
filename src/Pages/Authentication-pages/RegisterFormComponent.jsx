import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from 'yup';
import Swal from 'sweetalert2'

import Button from '../../Components/Button';

const RegisterFormComponent = () => {

  const [hidePassword, setHidePassword] = useState(true)
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true)
  const [showText, setshowText] = useState(true)
  const [showCText, setshowCText] = useState(true)

  const navigate = useNavigate()
  const formik = useFormik({
  
    initialValues: { email: "", password: "", confirmPassword: "" },
    
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),

      password: Yup.string()
  .required('No password provided.') 
  .matches(/^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,24}$/, 'Password should contain minimum of 8 Alphanumeric characters and a symbol (~!@#$%^&*()+=).')
       
    }),

    onSubmit: (values) => {
      if(values){
        Swal.fire({
          icon: 'success',
          title: 'Account Created',
          text: 'Yon can proceed to explore challenges and earn !',
        })
      navigate('/landing-page')
      }
    },
  });
  return (
    <section className="register-form-section">

      <div className="login-form-welcome">
        <h3> Create an Account!</h3>
        <p> Register with your account details to begin</p>

        <div className="login-form-holder">

          <form onSubmit={formik.handleSubmit}>

            <div className="form-input-holder" >
              <label htmlFor="email">First Name</label>
                <input
                  id="email"
                  className="email-address-input"
                  name="email"
                  type="email"
                  placeholder="First Name"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              {formik.errors.email ? <small>{formik.errors.email}</small> : null}
            </div>

            <div className="form-input-holder" >
              <label htmlFor="email">Last Name</label>
                <input
                  id="email"
                  className="email-address-input"
                  name="email"
                  type="email"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              {formik.errors.email ? <small>{formik.errors.email}</small> : null}
            </div>

            <div className="form-input-holder" >
              <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  className="email-address-input"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              {formik.errors.email ? <small>{formik.errors.email}</small> : null}
            </div>

            <div className="form-input-holder" >
              <label htmlFor="email">Phone Number</label>
                <input
                  id="email"
                  className="email-address-input"
                  name="email"
                  type="email"
                  placeholder="Phone Number"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              {formik.errors.email ? <small>{formik.errors.email}</small> : null}
            </div>

            <div className="form-input-holder">
             
              <label htmlFor="password">Password</label>
                <input
                  id="password"
                  className="password-input"
                  name="password"
                  type={hidePassword ? 'password' : 'text'}
                  placeholder="Enter your password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <span className="toogle-password" >
                { showText ? <Link onClick={() => {setHidePassword(false); setshowText(false)}}>Show</Link> :
                  <Link onClick={() => {setHidePassword(true); setshowText(true)}}>Hide</Link> }
                </span>
                
              {formik.errors.password ? <small>{formik.errors.password}</small> : null}
            </div>

            <div className="form-input-holder">
             
              <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  className="password-input"
                  name="confirmPassword"
                  type={hideConfirmPassword ? 'password' : 'text'}
                  placeholder="Confirm Password"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                />
                <span className="toogle-password" >
                { showCText ? <Link onClick={() => {setHideConfirmPassword(false); setshowCText(false)}}>Show</Link> :
                  <Link onClick={() => {setHideConfirmPassword(true); setshowCText(true)}}>Hide</Link> }
                </span>
                
              {formik.errors.password ? <small>{formik.errors.password}</small> : null}
            </div>

            <Button title='REGISTER'/>

          </form>
          <p>Already have an account ?</p>
          <p><Link to='/'>Login here</Link></p>
        </div>
      </div>

      
    </section>
  )
}

export default RegisterFormComponent