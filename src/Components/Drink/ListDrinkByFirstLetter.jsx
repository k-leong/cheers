import { Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ListDrinkByFirstLetter = () => {
  const [drinks, setDrinks] = useState([])
  const [loading, setLoading] = useState(true)
  const { letter } = useParams()
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
    <>
      {drinks ? drinks.map(({ idDrink, strDrink, strDrinkThumb }) => (
        <React.Fragment key={idDrink}>
          <p >{strDrink}</p>
          <img src={strDrinkThumb} />
        </React.Fragment>)) : error
      }
    </>
  )
}

export default ListDrinkByFirstLetter