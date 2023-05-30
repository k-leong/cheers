import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import ImagePanel from '../../layouts/ImagePanel'
import useFetchFirstLetter from '../../hooks/useFetchFirstLetter'

const ListDrinkByFirstLetter = () => {
  const { letter } = useParams()
  const { drinks } = useFetchFirstLetter(letter)

  return (
    <>
      {
        drinks ? <ImagePanel drinks={drinks} /> : <Typography>No drinks found</Typography>
      }
    </>
  )
}

export default ListDrinkByFirstLetter