import axios from 'axios'
import { useEffect, useState } from 'react'

const GetRandom = () => {
  const [meal, setMeal] = useState([])
  const [drink, setDrink] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetchRandomMealAndDrink()
  }, [])
  const fetchRandomMealAndDrink = async () => {
    setLoading(true)
    await axios.all([
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
      axios.get('https://www.themealdb.com/api/json/v1/1/random.php')])
      .then(axios.spread((cocktailResponse, mealResponse) => {
        setDrink(cocktailResponse.data.drinks[0])
        setMeal(mealResponse.data.meals[0])
        setLoading(false)
      })).catch((error) => {
        console.log(error)
        setLoading(false)
      })

  }
  return (
    <>
      {loading ?
        <div>...Data Loading.....</div> :
        <div>
          {meal.strMeal}
          {meal.strInstructions}
          <br />
          <br />
          {drink.strDrink}
          {drink.strInstructions}
        </div>}
    </>
  )
}

export default GetRandom