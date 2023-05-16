import { ImageList, ImageListItemBar, ImageListItem, ButtonBase } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SearchByIngredient = () => {
  const [drink, setDrink] = useState([])
  const [loading, setLoading] = useState(true)
  const {ingredient} = useParams()
  const navigate = useNavigate()

  function drinkHandler(id) {
    navigate(`/drink/id/${id}`)
  }
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
  console.log(drink)
  return (
    <ImageList cols={3} sx={{ width: '50%', height: '100%', margin: 'auto' }}>
      {drink.map(({ idDrink, strDrink, strDrinkThumb }) => {
        return (
          <ImageListItem key={idDrink}>
            <img alt={strDrink} src={strDrinkThumb} loading='lazy' height='auto' width='100%' />
            <ButtonBase onClick={() => drinkHandler(idDrink)} size='small' >
              <ImageListItemBar title={strDrink} />
            </ButtonBase>
          </ImageListItem>
        )
      })}
    </ImageList>
  )
}

export default SearchByIngredient