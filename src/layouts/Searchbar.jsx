import { Grid, TextField, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material'
import { useState } from 'react';

const Searchbar = () => {
  const [search, setSearch] = useState('')
  const [name, setName] = useState('')
  const selectChange = (event) => {
    setSearch(event.target.value);
  }
  const textChange = (event) => {
    setName(event.target.value)
  }
  const buttonHandler = () => {
    console.log('search ', search)
    console.log('name ', name)
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