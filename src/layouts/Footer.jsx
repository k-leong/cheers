import { BottomNavigation, BottomNavigationAction } from '@mui/material'

const Footer = () => {
  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction label='Recents' />
    </BottomNavigation>
  )
}

// import { createTheme, styled } from '@mui/material/styles'
// import { AppBar, Toolbar, Typography, IconButton, Grid } from '@mui/material';
// import ListLetter from '../Components/Home/ListLetter';

// const useStyles = styled((theme) => ({
//   root: {
//     flexGrow: 1,
//     position: 'relative',
//     marginTop: 'auto',
//   },
//   appBar: {
//     top: 'auto',
//     bottom: 0,
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   footerContent: {
//     [theme.breakpoints.up('md')]: {
//       textAlign: 'right',
//     },
//     [theme.breakpoints.down('sm')]: {
//       textAlign: 'center',
//     },
//   },
// }));

// function Footer() {
//   const classes = useStyles();

//   return (
//     <AppBar position="static" className={classes.appBar}>
//       <Typography variant="body1" className={classes.grow} align='center'>
//         <ListLetter />
//       </Typography>
//     </AppBar>
//   );
// }

export default Footer