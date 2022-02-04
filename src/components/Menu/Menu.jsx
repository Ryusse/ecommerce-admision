import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'

import './Menu.scss'

export default function Menu({ open }) {
  return (
    <div className={`menu ${open ? 'open' : ''}`}>
      <header className='menu__header'>
        <Logo />
      </header>
      <Navbar />
    </div>
  )
}
