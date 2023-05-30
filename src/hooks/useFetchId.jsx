import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchId = (id, navigate) => {
  const [drink, setDrink] = useState([])
  const [loading, setLoading] = useState(true)
  const [ingredients, setIngredients] = useState([])
  const [instructions, setInstructions] = useState('')

  useEffect(() => {
    if (!/\d+/.test(id)) {
      navigate(-1)
    }
    fetchId()
  }, [id])

  const fetchId = async () => {
    await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        const data = response.data.drinks[0]
        setDrink(data)
        setInstructions(data.strInstructions)

        let i = 1
        let tempIng = []
        while (i <= 15) {
          let ing = data[`strIngredient${i}`]
          const temp = []
          if (typeof ing == 'string' && ing.length > 0) {
            temp.push(data[`strMeasure${i}`])
            temp.push(data[`strIngredient${i}`])
            tempIng.push(temp)
          }
          i++
        }
        setIngredients(tempIng)
      })
      .catch((error) => {
        console.log(error)
      })
    setLoading(false)
  }
  return { drink, instructions, ingredients }
}

export default useFetchId