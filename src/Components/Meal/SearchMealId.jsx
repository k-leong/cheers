import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SearchMealId = () => {
  const [meal, setMeal] = useState([])
  const [loading, setLoading] = useState(false)
  const {id} = useParams()
  useEffect(() => {
    fetchId()
  }, [])
  const fetchId = async () => {
    setLoading(true)
    await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        setMeal(response.data.meals[0])
      }).catch((error) => {
        console.log(error)
      })
      setLoading(false)
  }
  console.log(id)
  return(
    <>
      {
        loading ? <div>...Data Loading.....</div> : <div>{meal.idMeal}</div>
      }
    </>
  )
}

export default SearchMealId