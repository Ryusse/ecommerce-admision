import Header from '../parts/Header/Header'
import Sidebar from '../parts/Sidebar/Sidebar'
import DrinkList from '../components/DrinkListHome/DrinkListHome'

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className='main'>
        <h2>Featured Products</h2>
        <DrinkList />
      </main>
    </>
  )
}
