import { Box, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TabInfo from '../../layouts/TabInfo'

const SearchDrinkId = () => {
  const [drink, setDrink] = useState([])
  const [loading, setLoading] = useState(true)
  const [ingredients, setIngredients] = useState([])
  const [instructions, setInstructions] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!/\d+/.test(id)) {
      navigate(-1)
    }
    fetchCategory()
  }, [])
  const fetchCategory = async () => {
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
  return (
    <>
      <Box alignItems='center' display='flex' justifyContent='center' alignContent='center'>
        <img src={drink.strDrinkThumb} loading='lazy' alt={drink.strDrink} />
      </Box>
      <Typography variant='h2' align='center'>{drink.strDrink}</Typography>
      <TabInfo ingredients={ingredients} instructions={instructions}/>
    </>
  )
}

export default SearchDrinkId