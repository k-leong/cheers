import axios from 'axios'
import { useEffect, useState } from 'react'

const ListCategories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    setLoading(true)
    await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => {
        setCategories(response.data.categories)
      })
      .catch((error) => {
        console.log(error)
      })
    setLoading(false)
  }
  console.log(categories)
  return (
    <>
      {categories.map(({ idCategory, strCategory }) => (
        <p key={idCategory}>{strCategory}</p>
      ))}
    </>
  )
}

export default ListCategories