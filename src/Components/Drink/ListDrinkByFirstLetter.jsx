import axios from 'axios'
import { useEffect, useState } from 'react'

const alpha = Array.from(Array(26)).map((e, i) => i + 65)
const alphabet = alpha.map((x) => String.fromCharCode(x))

const ListDrinkByFirstLetter = () => {
  const [drinks, setDrinks] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchDrinks()
  }, [])
  const fetchDrinks = async () => {
    await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then((response) => {
        setDrinks(response.data.drinks)
      }).catch((error) => {
        console.log(error)
      })
    setLoading(false)
  }

  return (
    <>
      {drinks.map(({ idDrink, strDrink, strDrinkThumb}) => (
        <>
        <p key={idDrink}>{strDrink}</p>
        <img src={strDrinkThumb}/>
        </>
      ))}
    </>
  )
}

export default ListDrinkByFirstLetter