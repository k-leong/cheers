import { Box, List, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box alignItems='center' display='flex' justifyContent='center' alignContent='center' sx={{ p: 3, marginRight: '25%', marginLeft: '25%' }}>
          <Typography align='center'>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const GetRandom = () => {
  // const [meal, setMeal] = useState([])
  const [drink, setDrink] = useState([])
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0)
  const [ingredients, setIngredients] = useState([])
  const [instructions, setInstructions] = useState('')

  useEffect(() => {
    fetchRandomDrink()
  }, [])
  const fetchRandomDrink = async () => {
    await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => {
        setDrink(response.data.drinks[0])
        setInstructions(response.data.drinks[0].strInstructions)

        let i = 1
        let tempIng = []
        while (i <= 15) {
          let ing = response.data.drinks[0][`strIngredient${i}`]
          const temp = []
          if (typeof ing == 'string' && ing.length > 0) {
            temp.push(response.data.drinks[0][`strMeasure${i}`])
            temp.push(response.data.drinks[0][`strIngredient${i}`])
            tempIng.push(temp)
          }
          i++
        }
        setIngredients(tempIng)
      }).catch((error) => {
        console.log(error)
      })
    setLoading(false)
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Box alignItems='center' display='flex' justifyContent='center' alignContent='center'>
        <img src={drink.strDrinkThumb} loading='lazy' alt={drink.strDrink} />
      </Box>
      <Typography variant='h2' align='center'>{drink.strDrink}</Typography>
      {/* <Typography align='center'>{ingredients}</Typography>
      <Typography align='center'>{instructions}</Typography> */}
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label='Ingredients' {...a11yProps(0)} />
        <Tab label='Instructions' {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <List component='ol'>
          {ingredients.map((ingredient, index) => {
            return (
              <li key={index}>{ingredient}</li>
            )
          })}
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {instructions}
      </TabPanel>
    </>
  )
}

export default GetRandom