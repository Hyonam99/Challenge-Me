import React from 'react'
import '../../Stylesheets/Component-styles/Components.css'

const Button = ({long, medium, short, inactiveBtn, title, onClick}) => {
  return (
    <button className={long ? 'long-button' : medium ? 'medium-button' : short ? 'short-button' : inactiveBtn ? 'inactive-button' : 'custom-button'} type="submit" onClick={onClick}>{title}</button>
  )
}

export default Button


/***************************************************************
 * Button interface will be based on different props
 * 1. Long
 * 2. Medium
 * 3. Short
 * 4. Inactive
 * 5. Title
 ****************************************************************/