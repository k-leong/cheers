import { Box, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import TabInfo from '../../layouts/Tabs/TabInfo'
import useFetchId from '../../hooks/useFetchId'

const SearchDrinkId = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { drink, instructions, ingredients } = useFetchId(id, navigate)

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