import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchName = (name) => {
  const [drink, setDrink] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetchName()
  }, [name])
  const fetchName = async () => {
    await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then((response) => {
        setDrink(response.data.drinks)
      }).catch((error) => {
        console.log(error)
      })
    setLoading(false)
  }

  return { drink }
}

export default useFetchName