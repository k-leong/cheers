import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ImagePanel from '../../layouts/ImagePanel'

const SearchByIngredient = () => {
  const [drink, setDrink] = useState([])
  const [loading, setLoading] = useState(true)
  const {ingredient} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!/[a-xA-Z]/.test(ingredient)) {
      navigate(-1)
    }
    fetchCategory()
  }, [])
  const fetchCategory = async () => {
    await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => {
        setDrink(response.data.drinks)
      }).catch((error) => {
        console.log(error)
      })
    setLoading(false)
  }
  
  return (
    <>
    {
      drink ? <ImagePanel drinks={drink} /> : <Typography>No drinks found</Typography>
    }
  </>
  )
}

export default SearchByIngredient