import React from 'react'
import Button from '../Utility-components/Button'
import Handmic from '../../Assets/Images/trophy-mic.png'


const DashboardComponent = () => {
  return (
    <section className='userdashboard-landing-page-container'>
      <section className="userdashboard-welcome-title-holder">
      <h2>Welcome Back, David Emaye</h2>
      <p>Are you ready for a new Challenge</p>
      </section>
    <section className="userdashboard-resume-journey-section">
      <div className='resume-journey-image-holder'>
        <img src={Handmic}/>
      </div>
      <div className='resume-journey-contents'>
        <span className='status'>OPEN</span>
        <h3>Music Challenge</h3>
        <p>Entry price: <span>N1,000</span></p>
        <Button title='Enter contest' medium/>
      </div>
    </section>
    </section>
  )
}

export default DashboardComponent