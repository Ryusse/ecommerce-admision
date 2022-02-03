import './DrinkItem.scss'

export default function DrinkItem({ drink }) {
  return (
    <div className='card'>
      <figure className='card__image'>
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      </figure>
      <p> {drink.strDrink} </p>
    </div>
  )
}
