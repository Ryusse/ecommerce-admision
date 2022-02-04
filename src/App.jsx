import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import './assets/sass/main.scss'
import './App.scss'

import Home from './views/Home'
import Drinks from './views/Drinks'
import DrinkDetails from './views/DrinkDetails'
import CartDetails from './views/CartDetails'

export default function App() {
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

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home drinks={drinks} />} />
        <Route path='/drinks' element={<Drinks drinks={drinks} isLoading={isLoading} />} />
        <Route path='/drinks/:drinkId' element={<DrinkDetails drinks={drinks} />} />
        <Route path='/cart' element={<CartDetails />} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </div>
  )
}
