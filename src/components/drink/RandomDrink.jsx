import { Toolbar } from '@mui/material'
import ImagePanel from '../../layouts/ImagePanel'
import useFetchRandomDrinks from '../../hooks/useFetchRandomDrinks'

const RandomDrink = () => {
  const { drinks } = useFetchRandomDrinks()

  return (
    <>
      <Toolbar />
      <ImagePanel drinks={drinks} />
    </>
  )
}

export default RandomDrink