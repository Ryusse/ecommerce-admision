import SearchIcon from '../Icons/SearchIcon'

import './Search.scss'

export default function Search() {
  return (
    <form className='search-container'>
      <SearchIcon className={'search-container__icon'}></SearchIcon>
      <input className='search-container__input' type='text' placeholder='Search store' />
    </form>
  )
}
