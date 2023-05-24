import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetchRandom = () => {
  const [drink, setDrink] = useState([])
  const [loading, setLoading] = useState(true)
  const [ingredients, setIngredients] = useState([])
  const [instructions, setInstructions] = useState('')

  useEffect(() => {
    fetchRandom()
  }, [])
  const fetchRandom = async () => {
    await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => {
        setDrink(response.data.drinks[0])
        setInstructions(response.data.drinks[0].strInstructions)

        let i = 1
        let tempIng = []
        while (i <= 15) {
          let ing = response.data.drinks[0][`strIngredient${i}`]
          const temp = []
          if (typeof ing == 'string' && ing.length > 0) {
            temp.push(response.data.drinks[0][`strMeasure${i}`])
            temp.push(response.data.drinks[0][`strIngredient${i}`])
            tempIng.push(temp)
          }
          i++
        }
        setIngredients(tempIng)
      }).catch((error) => {
        console.log(error)
      })
    setLoading(false)
  }
  return { drink, instructions, ingredients }
}

export default useFetchRandom