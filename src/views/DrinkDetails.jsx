import { useState, useEffect } from 'react'

import Header from '../parts/Header/Header'
import Sidebar from '../parts/Sidebar/Sidebar'
import Button from '../components/Button/Button'

export default function DrinkDetails() {
  const [drinks, setDrinks] = useState([])
  const initialUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

  const getDrinks = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(setDrinks(data.drinks)))

      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getDrinks(initialUrl)
  }, [])

  return (
    <>
      <Header />
      <Sidebar />
      <main className='main'>
        <div className='drink-details'>
          <figure>
            <img src={drinks.strDrinkThumb} alt={drinks.strDrink} />
          </figure>

          <div>
            <h3></h3>
            <p></p>
            <span></span>

            <div>
              <Button content={'Add to cart'} selector={'button--red'} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
