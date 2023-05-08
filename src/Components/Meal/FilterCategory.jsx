import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FilterCategory = () => {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const {category} = useParams()
  useEffect(() => {
    fetchCategory()
  }, [])
  const fetchCategory = async () => {
    setLoading(true)
    await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => {
        setMeals(response.data.meals)
      }).catch((error) => {
        console.log(error)
      })
    setLoading(false)
  }
  console.log(meals)
  return (
    <>
      {meals.map(({ idMeal }) => (
        <p key={idMeal}>{idMeal}</p>
      ))}
    </>
  )
}

export default FilterCategory