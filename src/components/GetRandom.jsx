import { Box, Typography } from '@mui/material'
import TabInfo from '../layouts/Tabs/TabInfo'
import useFetchRandom from '../hooks/useFetchRandom'

const GetRandom = () => {
  const { drink, instructions, ingredients } = useFetchRandom()

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