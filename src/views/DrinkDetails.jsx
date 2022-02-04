import Header from '../parts/Header/Header'
import Sidebar from '../parts/Sidebar/Sidebar'
import Button from '../components/Button/Button'

export default function DrinkDetails({ drinks }) {
  // const drinkId = useParams()
  // const [drinks, setDrinks] = useState(null)

  // useEffect(() => {
  //   get('/drinks/' + drinkId).then((data) => {
  //     setDrinks(data)
  //   })
  // }, [drinkId])

  // console.log(drinks)

  return (
    <>
      <Header />
      <Sidebar />
      <main className='main'>
        <div className='drink-details'>
          <figure>
            <img src={drinks.strDrinkThumb} alt='' />
          </figure>

          <div>
            <h3></h3>
            <p></p>
            <span></span>

            <div>
              <Button content={'Add to cart'} selector={'button--red'} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
