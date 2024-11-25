import $ from './NavbarLink.module.sass'
import { Link } from 'react-router-dom'
import React from 'react'

const NavbarLink = ({ imgSrc, name, to }) => {
  return (
    <li className={$.list_item}>
      <img src={imgSrc} alt={name} />
      <Link className={$.link} to={to}>
        {name}
      </Link>
    </li>
  )
}

export default NavbarLink