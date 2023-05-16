import { ButtonBase, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ListDrinkByFirstLetter = () => {
  const [drinks, setDrinks] = useState([])
  const [loading, setLoading] = useState(true)
  const { letter } = useParams()
  const navigate = useNavigate()

  function drinkHandler(id) {
    navigate(`/drink/id/${id}`)
  }
  useEffect(() => {
    fetchDrinks()
  }, [])
  const fetchDrinks = async () => {
    await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((response) => {
        setDrinks(response.data.drinks)
      }).catch((error) => {
        console.log(error)
      })
    setLoading(false)
  }

  const error = drinks ? <></> : <Typography>No drinks found</Typography>

  return (
    <ImageList cols={3} sx={{ width: '50%', height: '100%', margin: 'auto' }}>
      {drinks.map(({ idDrink, strDrink, strDrinkThumb }) => {
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

export default ListDrinkByFirstLetter