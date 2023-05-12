import GetRandom from './Components/GetRandom'
import ListCategories from './Components/Meal/ListCategories'
import FilterCategory from './Components/Meal/FilterCategory'
import SearchMealId from './Components/Meal/SearchMealId'
import ListDrinkByFirstLetter from './Components/Drink/ListDrinkByFirstLetter'
import RandomDrink from './Components/Drink/RandomDrink'
import SearchDrinkId from './Components/Drink/SearchDrinkId'
import SearchByIngredient from './Components/Drink/SearchByIngredient'
import ListLetter from './Components/Home/ListLetter'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './layouts/Navbar'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/drink'>
          <Route index element={<RandomDrink />} />
          <Route path='id/:id' element={<SearchDrinkId />} />
          <Route path='letter/:letter' element={<ListDrinkByFirstLetter />} />
        </Route>
        <Route path='/meal'>
          <Route index element={<ListCategories />} />
          <Route path=':category' element={<FilterCategory />} />
          <Route path='id/:id' element={<SearchMealId />} />
        </Route>
        <Route path='/random' element={<GetRandom />} />
      </Routes>
      <ListLetter/>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Recents" />
      </BottomNavigation>
    </>
  )
}

export default App
