import React from 'react'
import '../../Stylesheets/Component-styles/Components.css'
import LogoIcon from '../../Assets/Icons/challengeMe-white.svg'

const Logo = () => {
  return (
    <div className="logo">
          <img src={LogoIcon} alt="Challengeme-Logo" />
    </div>
  )
}

export default Logo