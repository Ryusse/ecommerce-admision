import DrinkList from '../components/DrinkList/DrinkList'
import Header from '../parts/Header/Header'
import Sidebar from '../parts/Sidebar/Sidebar'

export default function Drinks() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className='main'>
        <DrinkList />
      </main>
    </>
  )
}
