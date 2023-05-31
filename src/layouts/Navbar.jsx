import { AppBar, Button, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar >
      <Toolbar sx={{ justifyContent: 'end' }}>
        <Button variant='contained' color='inherit' sx={{ textTransform: 'capitalize' }}>
          <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
        </Button>
        <Button variant='contained' color='inherit' sx={{ textTransform: 'capitalize' }}>
          <Link to='/random' style={{ textDecoration: 'none' }} reloadDocument>Random</Link>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar