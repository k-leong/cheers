import { Grid, TextField, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
  const [search, setSearch] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const selectChange = (event) => {
    setSearch(event.target.value)
  }
  const textChange = (event) => {
    setName(event.target.value)
  }
  const buttonHandler = () => {
    if (search == 'Ingredient'){
      navigate(`/drink/ingredient/${name}`)
    }
    else if (search == 'Cocktail Name'){
      navigate(`/drink/name/${name}`)
    }
  }

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <FormControl sx={{ display: 'flex', width: '100%', maxWidth: '50%' }}>
        <TextField type='search' label='Search cocktail name or ingredient' onChange={textChange} />
      </FormControl>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Select one</InputLabel>
        <Select label='Search' value={search} onChange={selectChange}>
          <MenuItem value='Cocktail Name'>Cocktail Name</MenuItem>
          <MenuItem value='Ingredient'>Ingredient</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={buttonHandler}>Search</Button>
    </Grid>
  )
}

export default Searchbar