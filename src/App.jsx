import GetRandom from './Components/GetRandom'
import ListDrinkByFirstLetter from './Components/Drink/ListDrinkByFirstLetter'
import RandomDrink from './Components/Drink/RandomDrink'
import SearchDrinkId from './Components/Drink/SearchDrinkId'
import SearchByIngredient from './Components/Drink/SearchByIngredient'
import ListLetter from './Components/Home/ListLetter'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './layouts/Navbar'
import { Toolbar } from '@mui/material'
import Footer from './layouts/Footer'
import SearchByName from './Components/Drink/SearchByName'

function App() {
  return (
    <>
      <Navbar />
      <Toolbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/drink'>
          <Route index element={<RandomDrink />} />
          <Route path='id/:id' element={<SearchDrinkId />} />
          <Route path='letter/:letter' element={<ListDrinkByFirstLetter />} />
          <Route path='name/:name' element={< SearchByName />} />
          <Route path='ingredient/:ingredient' element={<SearchByIngredient />} />
        </Route>
        <Route path='/random' element={<GetRandom />} />
      </Routes>
      <ListLetter />
      <Footer />
    </>
  )
}

export default App
