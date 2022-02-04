import { Link } from 'react-router-dom'

import CartIcon from '../Icons/CartIcon'

import './Cart.scss'

export default function Cart() {
  return (
    <Link className='cart' to='/cart'>
      <CartIcon className={'cart'} />
    </Link>
  )
}
