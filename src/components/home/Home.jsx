import { Box, Typography } from '@mui/material'
import Searchbar from '../../layouts/Searchbar'
import RandomDrink from '../drink/RandomDrink'

const Home = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Typography align='center' variant='h2'>Welcome to the Cheers Bar</Typography>
        <Searchbar />
        <RandomDrink />
      </Box>
    </>
  )
}

export default Home