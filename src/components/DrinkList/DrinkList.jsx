import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import DrinkItem from '../DrinkItem/DrinkItem'
import Spinner from '../Spinner/Spinner'

import './DrinkList.scss'

export default function DrinkList({ drinks, isLoading }) {
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
