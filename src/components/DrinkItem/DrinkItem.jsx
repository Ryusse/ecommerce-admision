import Button from '../Button/Button'
import { useParams } from 'react-router'

import './DrinkItem.scss'

export default function DrinkItem({ drink }) {
  const params = useParams()
  return (
    <div className='card'>
      <figure className='image-container'>
        <img className='image-container__img' src={drink.strDrinkThumb} alt={drink.strDrink} />
      </figure>
      <div className='content'>
        <span className='content__category'> {drink.strCategory} </span>
        <h3 className='content__title'> {drink.strDrink} </h3>
        <span className='content__price'> $42.00 </span>
        {/* <Button content={'Add to cart'} selector={'button--red'} /> */}
      </div>
    </div>
  )
}
