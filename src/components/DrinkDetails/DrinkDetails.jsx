import { useFetch } from '../../hooks/useFetch'

import Button from '../Button/Button'

import './DrinkDetails.scss'

export default function DrinkDetails() {
  // const initialUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

  // const { drinks, isLoading } = useFetch(initialUrl)

  return (
    <div className='drink-details'>
      <figure>
        {/* <img src={drinks.strDrinkThumb} alt={drinks.strDrink} /> */}
        Image
      </figure>

      <div>
        <h3>Titulo</h3>
        <p>Description</p>
        <span>Precio</span>

        <div>
          <Button content={'Add to cart'} selector={'button--red'} />
        </div>
      </div>
    </div>
  )
}
