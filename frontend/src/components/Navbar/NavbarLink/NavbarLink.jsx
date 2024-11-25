import $ from './NavbarLink.module.sass'
import { NavLink } from 'react-router-dom'

const handleNavLink$ = ({ isActive }) => isActive ? $.active : $.pending

const NavbarLink = ({ imgSrc, name, to }) => {
  return (
    <li className={$.item}>
      <NavLink className={handleNavLink$} to={to}>
        <img src={imgSrc} alt={name} />
        {name}
      </NavLink>
    </li>
  )
}

export default NavbarLink