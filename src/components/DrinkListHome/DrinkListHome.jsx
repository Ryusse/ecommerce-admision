import { Link } from 'react-router-dom'

import DrinkItem from '../DrinkItem/DrinkItem'

import './DrinkListHome.scss'

export default function DrinkListHome({ drinks }) {
  return (
    <>
      <ul className='drink-list-home'>
        {drinks.slice(0, 3).map((drink) => (
          <Link key={drink.idDrink} to={drink.idDrink}>
            <DrinkItem drink={drink} />
          </Link>
        ))}
      </ul>
    </>
  )
}
