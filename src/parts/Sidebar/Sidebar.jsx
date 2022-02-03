import './Sidebar.scss'

import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'

export default function Header() {
  return (
    <aside className='sidebar'>
      <div className='sidebar__container'>
        <Logo />
        <h1 className='sidebar__title'>Explore</h1>
        <Navbar />
      </div>
    </aside>
  )
}
