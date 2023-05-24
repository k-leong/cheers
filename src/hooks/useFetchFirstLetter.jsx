import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetchFirstLetter = (letter) => {
  const [drinks, setDrinks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFirstLetter()
  }, [letter])
  const fetchFirstLetter = async () => {
    await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((response) => {
        setDrinks(response.data.drinks)
      }).catch((error) => {
        console.log(error)
      })
    setLoading(false)
  }
  return { drinks }
}

export default useFetchFirstLetter