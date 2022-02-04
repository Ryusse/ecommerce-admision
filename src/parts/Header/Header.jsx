import { useState } from 'react'
import Cart from '../../components/Cart/Cart'

import Logo from '../../components/Logo/Logo'
import Menu from '../../components/Menu/Menu'
import Search from '../../components/Search/Search'
import Toggle from '../../components/Toggle/Toggle'

import './Header.scss'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggle = () => {
    function toggleMenu(prevIsMenuOpen) {
      return !prevIsMenuOpen
    }

    setIsMenuOpen(toggleMenu)
  }

  return (
    <header className='header'>
      <Logo />
      <Search />
      <Toggle open={isMenuOpen} ariaLabel={'menu open'} onClick={handleToggle} />
      <Cart />
      <Menu open={isMenuOpen} />
    </header>
  )
}
