import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetchIngredient = (ingredient, navigate) => {
  const [drink, setDrink] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!/[a-xA-Z]/.test(ingredient)) {
      navigate(-1)
    }
    fetchIngredient()
  }, [ingredient])
  const fetchIngredient = async () => {
    await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => {
        setDrink(response.data.drinks)
      }).catch((error) => {
        console.log(error)
      })
    setLoading(false)
  }
  return { drink }
}

export default useFetchIngredient