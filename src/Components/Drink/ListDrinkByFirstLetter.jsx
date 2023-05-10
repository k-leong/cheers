import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ListDrinkByFirstLetter = () => {
  const [drinks, setDrinks] = useState([])
  const [loading, setLoading] = useState(true)
  const { letter } = useParams()
  useEffect(() => {
    fetchDrinks()
  }, [])
  const fetchDrinks = async () => {
    await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((response) => {
        setDrinks(response.data.drinks)
      }).catch((error) => {
        console.log(error)
      })
    setLoading(false)
  }

  return (
    <>
      {drinks.map(({ idDrink, strDrink, strDrinkThumb }) => (
        <>
          <p key={idDrink}>{strDrink}</p>
          <img src={strDrinkThumb} />
        </>
      ))}
    </>
  )
}

export default ListDrinkByFirstLetter