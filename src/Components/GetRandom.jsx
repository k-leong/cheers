import { Box, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import TabInfo from '../layouts/TabInfo'

const GetRandom = () => {
  // const [meal, setMeal] = useState([])
  const [drink, setDrink] = useState([])
  const [loading, setLoading] = useState(true)
  const [ingredients, setIngredients] = useState([])
  const [instructions, setInstructions] = useState('')

  useEffect(() => {
    fetchRandomDrink()
  }, [])
  const fetchRandomDrink = async () => {
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

export default GetRandom