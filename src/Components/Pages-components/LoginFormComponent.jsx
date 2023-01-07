import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from 'yup';
import Button from '../Utility-components/Button';

const LoginFormComponent = () => {
  const [hidePassword, setHidePassword] = useState(true)
  const [showText, setshowText] = useState(true)

  const navigate = useNavigate()
  const formik = useFormik({
  
    initialValues: { email: "", password: "" },
    
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),

      password: Yup.string()
      .required('No password provided.') 
      .matches(/^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,24}$/, 'Password should contain minimum of 8 Alphanumeric characters and a symbol (~!@#$%^&*()+=).')
       
    }),

    onSubmit: (values) => {
      if(values){
      navigate('/dashboard')
      }
    },
  });

  return (
    <section className="login-form-section">

      <div className="login-form-welcome">
        <h3> Welcome Back!</h3>
        <p> Login with your account details to continue</p>

        <div className="login-form-holder">

          <form onSubmit={formik.handleSubmit}>

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

            <span className="forgot-password" >
              <Link>Forgot password ?</Link>
            </span>
            <Button title='LOG IN'/>

          </form>
          <p>Not a registered user ?</p>
          <p><Link to='/register'>Create an account</Link></p>
        </div>
      </div>

      
    </section>
  );
}

export default LoginFormComponent