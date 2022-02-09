import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [drinks, setDrinks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getDrinks = async () => {
    try {
      const response = await fetch(url)
      const responseJSON = await response.json()
      setDrinks(responseJSON.drinks)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getDrinks()
  }, [])

  return { drinks, isLoading }
}
