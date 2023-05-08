import { Button, ImageList, ImageListItem, ImageListItemBar, Toolbar } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RandomDrink = () => {
  const navigate = useNavigate()
  const [drinks, setDrinks] = useState([])
  const [loading, setLoading] = useState(true)
  function drinkHandler(id) {
    navigate(`/drink/id/${id}`)
  }
  useEffect(() => {
    fetchRandomDrink()
  }, [])

  const fetchRandomDrink = async () => {
    await axios.all([
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    ]).then(axios.spread((first, second, third, fourth, fifth, sixth) => {
      let tempDrink = []
      const responses = [first, second, third, fourth, fifth, sixth]

      responses.forEach((response) => {
        tempDrink.push(response.data.drinks[0])
      })
      setDrinks(tempDrink)
      setLoading(false)
    })).catch((error) => {
      console.log(error)
    })

  }
  return (
    <>
      <Toolbar />
      <ImageList cols={3}>
        {drinks.map(({ idDrink, strDrink, strDrinkThumb }) => {
          return (
            <ImageListItem key={idDrink}>
              <img src={strDrinkThumb} loading='lazy' height='auto' width='100%' />
              <Button onClick={() => drinkHandler(idDrink)} size='small' fullWidth>
                <ImageListItemBar title={strDrink} />
              </Button>
            </ImageListItem>
          )
        })}
      </ImageList>
    </>
  )
}

export default RandomDrink