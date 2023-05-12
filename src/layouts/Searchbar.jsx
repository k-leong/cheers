import { Grid, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import { useState } from 'react';

const Searchbar = () => {
  const [color, setColor] = useState("")
  const handleChange = (event) => {
    setColor(event.target.value);
  }
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
    <FormControl sx={{ display: 'flex', width: '100%', maxWidth: '50%' }}>
      <TextField type='search' label='Search cocktail name or ingredient' />
    </FormControl>
    <FormControl sx={{ minWidth: 120 }}>
      <InputLabel>Selct one</InputLabel>
      <Select label="Colors" value={color} onChange={handleChange}>
        <MenuItem value={1}>Cocktail Name</MenuItem>
        <MenuItem value={2}>Ingredient</MenuItem>
      </Select>
    </FormControl>
  </Grid>
  )
}

export default Searchbar