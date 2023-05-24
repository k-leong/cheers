import GetRandom from './components/GetRandom'
import ListDrinkByFirstLetter from './components/drink/ListDrinkByFirstLetter'
import RandomDrink from './components/drink/RandomDrink'
import SearchDrinkId from './components/drink/SearchDrinkId'
import SearchByIngredient from './components/drink/SearchByIngredient'
import ListLetter from './components/home/ListLetter'
import Home from './components/home/Home'
import Navbar from './layouts/Navbar'
import { Toolbar } from '@mui/material'
import Footer from './layouts/Footer'
import SearchByName from './components/drink/SearchByName'
import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'

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
        <Route path='/notfound' element={<NotFound />} />
        <Route path='*' element={<Navigate replace to='/notfound' />} />
      </Routes>
      <ListLetter />
      <Footer />
    </>
  )
}

export default App
