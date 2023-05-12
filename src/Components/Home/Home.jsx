import { Box, Grid, Toolbar, Paper, Button, Typography, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Searchbar from '../../layouts/Searchbar'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(25),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const Home = () => {
  const navigate = useNavigate()
  const [color, setColor] = useState("")
  function drinkHandler() {
    navigate('/drink')
  }
  function mealHandler() {
    navigate('/meal')
  }
  const handleChange = (event) => {
    setColor(event.target.value);
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Typography align='center' variant='h2'>Welcome</Typography>
        <Searchbar />
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Button variant="outlined" onClick={mealHandler}>
            <Item>Meal</Item>
          </Button>
          <Button variant="outlined" onClick={drinkHandler}>
            <Item>Drink</Item>
          </Button>
        </Grid>
      </Box>
    </>
  )
}

export default Home