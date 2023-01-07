import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from 'yup';
import Swal from 'sweetalert2'

import Button from '../../Components/Utility-components/Button';
import Sicon from '../../Assets/Icons/circle-check-full.svg'

const RegisterFormComponent = () => {

  const [hidePassword, setHidePassword] = useState(true)
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true)
  const [showText, setshowText] = useState(true)
  const [showCText, setshowCText] = useState(true)

  const navigate = useNavigate()
  const formik = useFormik({
  
    initialValues: { firstName: '', lastName: '', email: "", phoneNumber: '', password: "", confirmPassword: "" },
    
    validationSchema: Yup.object({
      firstName: Yup.string().min(2, 'Must be at least 2 characters or more').required('Required'),
      lastName: Yup.string().min(2, 'Must be at least 2 characters or more').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phoneNumber: Yup.string().matches(/^[0]+[7-9]+[0-1]+[0-9]{8}$/, 'Phone number is not valid'),
      password: Yup.string()
      .required('No password provided.') 
      .matches(/^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,24}$/, 'Password should contain minimum of 8 Alphanumeric characters and a symbol (~!@#$%^&*()+=).'),
      confirmPassword: Yup.string().required('Please retype your password.')
      .oneOf([Yup.ref('password')], 'Your passwords do not match.')
       
    }),

    onSubmit: (values) => {
      if(values){
        Swal.fire({
          iconHtml: `<img src=${Sicon}>`,
          customClass: {icon: 'no-border'},
          title: 'Account Created',
          text: 'You can proceed to explore challenges and earn !',
          confirmButtonText: 'Start Challenge',
          // html:
          //       'You can use <b>bold text</b>, ' +
          //       '<a href="//sweetalert2.github.io">Start Challenge</a> ' +
          //       'and other HTML tags',
        }).then((result) => {
          if(result.isConfirmed){
            navigate('/dashboard')
          }
        })
      
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
              <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  className="firstName-input"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
              {formik.errors.firstName ? <small>{formik.errors.firstName}</small> : null}
            </div>

            <div className="form-input-holder" >
              <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  className="lastName-input"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
              {formik.errors.lastName ? <small>{formik.errors.lastName}</small> : null}
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
              <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  id="phoneNumber"
                  className="phoneNumber-input"
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone Number"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                />
              {formik.errors.phoneNumber ? <small>{formik.errors.phoneNumber}</small> : null}
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
                  className="confirmPassword-input"
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
                
              {formik.errors.confirmPassword ? <small>{formik.errors.confirmPassword}</small> : null}
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