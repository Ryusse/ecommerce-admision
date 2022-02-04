import './Navbar.scss'

import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <li className='navbar__item'>
          <Link className='navbar__link' to='/'>
            Home
          </Link>
        </li>
        <Link className='navbar__link' to='/drinks'>
          Drinks
        </Link>
      </ul>
    </nav>
  )
}
