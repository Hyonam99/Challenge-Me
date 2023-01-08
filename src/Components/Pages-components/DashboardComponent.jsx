import React from 'react'
import Button from '../Utility-components/Button'
import Handmic from '../../Assets/Images/trophy-mic.png'
import Trophy from '../../Assets/Images/trophy.png'

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

    <section className="userdashboard-wallet-summary-section">
      <div className="wallet-options">
        <p>Wallet</p>
        <Button title='Withdraw Funds' medium/>
      </div>
      <div className="wallet-content-display">
        <div className='wallet-content-display-image-holder'>
          <img src={Trophy} alt='trophy' />
        </div>
        <div className="wallet-content-display-total-earning">
          <span className='wallet-title'> Total Earnings</span>
          <span className='wallet-details'>
            <h4>N6,180.00</h4>
            <p>Please note this is the total sum of your earnings here on CHALLENGE ME</p>
          </span>
        </div>
        <div className="wallet-content-display-total-earning">
          <span className='wallet-title'>Balance</span>
          <span className='wallet-details'>
            <h4>N12,560.93</h4>
            <p>Please note this the current balance amount left on your wallet.</p>
          </span>
        </div>
      </div>
    </section>
    </section>
  )
}

export default DashboardComponent