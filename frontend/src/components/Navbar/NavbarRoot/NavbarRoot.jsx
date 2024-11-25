import $ from './NavbarRoot.module.sass'
import React from 'react'

const NavbarRoot = ({ children }) => {
  return (
    <nav>
      <ul className={$.list}>
        {children}
      </ul>
    </nav>
  )
}

export default NavbarRoot