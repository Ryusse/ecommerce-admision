import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import DrinkItem from '../DrinkItem/DrinkItem'
import Spinner from '../Spinner/Spinner'

import './DrinkList.scss'

export default function DrinkList() {
  const [drinks, setDrinks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const initialUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

  const getDrinks = (url) => {
    setIsLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDrinks(data.drinks))
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getDrinks(initialUrl)
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <ul className='drink-list'>
        {drinks.map((drink) => (
          <Link key={drink.idDrink} to={drink.idDrink}>
            <DrinkItem drink={drink} />
          </Link>
        ))}
      </ul>
    </>
  )
}
