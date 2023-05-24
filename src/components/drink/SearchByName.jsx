import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImagePanel from '../../layouts/ImagePanel'
import useFetchName from '../../hooks/useFetchName'

const SearchByName = (props) => {
  // const [drink, setDrink] = useState([])
  // const [loading, setLoading] = useState(true)
  const { name } = useParams()
  const {drink} = useFetchName(name)
  // useEffect(() => {
  //   fetchCategory()
  // }, [])
  // const fetchCategory = async () => {
  //   await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
  //     .then((response) => {
  //       setDrink(response.data.drinks)
  //     }).catch((error) => {
  //       console.log(error)
  //     })
  //   setLoading(false)
  // }
  

  return (
    <>
    {
      drink ? <ImagePanel drinks={drink} /> : <Typography>No drinks found</Typography>
    }
  </>
  )
}

export default SearchByName