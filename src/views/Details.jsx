import { useState, useEffect } from 'react'

import Header from '../parts/Header/Header'
import Sidebar from '../parts/Sidebar/Sidebar'
import Button from '../components/Button/Button'
import DrinkDetails from '../components/DrinkDetails/DrinkDetails'

export default function Details() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className='main'>
        <h1>Details</h1>
        <DrinkDetails />
      </main>
    </>
  )
}
