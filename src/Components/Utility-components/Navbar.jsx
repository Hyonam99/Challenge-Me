import React from 'react'
import Button from './Button'
import { IoIosNotificationsOutline } from "react-icons/io";
import profile from '../../Assets/Images/bg-male.png'

const Navbar = () => {
  const style = {width:'24px', height:'24px', color:'white'}
  return (
    <nav className='main-navigation-container'>
      <section className="current-section-title">
        <p>Dashboard</p>
      </section>
      <ul className="navigation-section">
        <li className='challenge'>Challengers Online <span>22,566 online</span></li>
        <li className='balance'>Balance <span>$12,560.93</span></li>
        <li><Button title='Top up' short/></li>
        <li><IoIosNotificationsOutline style={style}/></li>
        <li className='profile-holder'>
          <li className='profile-image'><img src={profile} alt="profile-image"/></li> David Emaye
          </li>
      </ul>
    </nav>
  )
}

export default Navbar