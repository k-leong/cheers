import { Box, CssBaseline, Grid, Toolbar, Paper, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(25),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const Home = () => {
  const navigate = useNavigate()
  function drinkHandler() {
    navigate('/drink')
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Typography align='center' variant='h2'>Welcome</Typography>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Button variant="outlined">
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