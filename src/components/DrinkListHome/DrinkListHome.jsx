import { useEffect, useState } from 'react'

import DrinkItem from '../DrinkItem/DrinkItem'

import './DrinkListHome.scss'

export default function DrinkListHome({ drinks }) {
  return (
    <>
      <ul className='drink-list-home'>
        {drinks.slice(0, 3).map((drink) => (
          <DrinkItem key={drink.idDrink} drink={drink} />
        ))}
      </ul>
    </>
  )
}
