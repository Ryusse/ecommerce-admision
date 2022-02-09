import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

import DrinkItem from '../DrinkItem/DrinkItem'
import Spinner from '../Spinner/Spinner'

import './DrinkList.scss'

export default function DrinkList() {
  const initialUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

  const { drinks, isLoading } = useFetch(initialUrl)

  return (
    <>
      <ul className='drink-list'>
        {isLoading ? (
          <Spinner />
        ) : (
          drinks &&
          drinks.map((drink) => (
            <Link key={drink.idDrink} to={drink.idDrink}>
              <DrinkItem drink={drink} />
            </Link>
          ))
        )}
      </ul>
    </>
  )
}
