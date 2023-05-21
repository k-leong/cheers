import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { GitHub, LinkedIn } from '@mui/icons-material'

const Footer = () => {
  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction label='LinkedIn' icon={<LinkedIn />} onClick={() => window.open('https://linkedin.com/in/kennyleong21')} />
      <BottomNavigationAction label='GitHub' icon={<GitHub />} onClick={() => window.open('https://github.com/k-leong')} />
    </BottomNavigation>
  )
}

export default Footer