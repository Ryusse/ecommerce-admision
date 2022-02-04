import { Link } from 'react-router-dom'

import Header from '../parts/Header/Header'
import Sidebar from '../parts/Sidebar/Sidebar'
import DrinkList from '../components/DrinkListHome/DrinkListHome'
import Button from '../components/Button/Button'

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className='main home-main'>
        <div className='featured-products'>
          <h2>Featured Products</h2>
          <DrinkList />
          <Link className='featured-products__button' to='/drinks'>
            <Button content={'See more'} selector={'button--red'} />
          </Link>
        </div>
      </main>
    </>
  )
}
