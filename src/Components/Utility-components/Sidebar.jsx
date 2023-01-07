import React from 'react'
import { Link } from 'react-router-dom'
import '../../Stylesheets/Component-styles/Components.css'
import Logo from './Logo'

const Sidebar = () => {
  return (
    <section className="main-sidebar-container">
      <div className="sidebar-logo-holder">
        <Logo />
      </div>
      <div className="sidebar-contents">
        <ul className='sidebar-navigation'>
          <li><Link>Dashboard</Link></li>
          <li><Link>Challenges</Link></li>
          <li><Link>Fund Account</Link></li>
          <li><Link>Transactions</Link></li>
          <li><Link>Withdraw</Link></li>
          <li><Link>Account</Link></li>
        </ul>
      </div>
    </section>
  )
}

export default Sidebar