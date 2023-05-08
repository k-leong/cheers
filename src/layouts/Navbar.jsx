import { AppBar, Button, Toolbar } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: 'end' }}>
        <Button variant="outlined" color="error" sx={{ textTransform: 'capitalize' }}>
          <Link to='/'>Home</Link>
        </Button>
        <Button variant="outlined" color="error" sx={{ textTransform: 'capitalize' }}>
          <Link to='/random'>Random</Link>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar