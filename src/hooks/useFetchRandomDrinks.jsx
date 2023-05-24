import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetchRandomDrinks = () => {
  const [drinks, setDrinks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRandomDrinks()
  }, [])

  const fetchRandomDrinks = async () => {
    await axios.all([
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    ]).then(axios.spread((first, second, third, fourth, fifth, sixth) => {
      let tempDrink = []
      const responses = [first, second, third, fourth, fifth, sixth]

      responses.forEach((response) => {
        tempDrink.push(response.data.drinks[0])
      })
      setDrinks(tempDrink)
    })).catch((error) => {
      console.log(error)
    })
    setLoading(false)
  }
  return { drinks }
}

export default useFetchRandomDrinks