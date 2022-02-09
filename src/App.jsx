import { Routes, Route, Navigate } from 'react-router-dom'
import { useFetch } from './hooks/useFetch'

import './assets/sass/main.scss'
import './App.scss'

import Home from './views/Home'
import Drinks from './views/Drinks'
import Details from './views/Details'
import CartDetails from './views/CartDetails'

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/drinks' element={<Drinks />} />
        <Route path='/drinks/:drinkId' element={<Details />} />
        <Route path='/cart' element={<CartDetails />} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </div>
  )
}
