import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import './assets/sass/main.scss'

import Home from './views/Home'
import Drinks from './views/Drinks'

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/drinks' element={<Drinks />} />
      </Routes>
    </div>
  )
}
