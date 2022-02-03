import Logo from '../../components/Logo/Logo'
import Toggle from '../../components/Toggle/Toggle'
import './Header.scss'

import { useState } from 'react'

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
      <Toggle open={isMenuOpen} ariaLabel={'menu open'} onClick={handleToggle} />
    </header>
  )
}
