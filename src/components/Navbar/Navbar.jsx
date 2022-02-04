import './Navbar.scss'

import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const setActive = ({ isActive }) => (isActive ? 'navba__link--active' : '')

  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <li className='navbar__item'>
          <NavLink
            to='/'
            className='navbar__link'
            style={({ isActive }) =>
              isActive ? { background: 'rgba(251, 46, 134, 12%)', color: '#fb2e86' } : {}
            }
          >
            Home
          </NavLink>
        </li>
        <NavLink
          to='/drinks'
          className='navbar__link'
          style={({ isActive }) =>
            isActive ? { background: 'rgba(251, 46, 134, 12%)', color: '#fb2e86' } : {}
          }
        >
          Drinks
        </NavLink>
      </ul>
    </nav>
  )
}
