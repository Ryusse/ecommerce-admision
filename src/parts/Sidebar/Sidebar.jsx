import './Sidebar.scss'

import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'

export default function Header() {
  return (
    <aside className='sidebar'>
      <Logo />
      <h1 className='sidebar__title'>Explore</h1>
      <Navbar />
    </aside>
  )
}
