import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import './assets/sass/main.scss'
import './App.scss'

import Home from './views/Home'
import Drinks from './views/Drinks'
import DrinkDetails from './views/DrinkDetails'
import CartDetails from './views/CartDetails'

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/drinks' element={<Drinks />} />
        <Route path='/drinks/:drinkId' element={<DrinkDetails />} />
        <Route path='/cart' element={<CartDetails />} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </div>
  )
}
