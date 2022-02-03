import { useEffect, useState } from 'react'

import DrinkItem from '../DrinkItem/DrinkItem'

import './DrinkListHome.scss'

export default function DrinkListHome() {
  const [drinks, setDrinks] = useState([])
  const initialUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

  const getDrinks = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDrinks(data.drinks))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getDrinks(initialUrl)
  }, [])

  if (!drinks) {
    return null
  }

  return (
    <ul className='drink-list'>
      {drinks.slice(0, 4).map((drink) => (
        <DrinkItem key={drink.idDrink} drink={drink} />
      ))}
    </ul>
  )
}
