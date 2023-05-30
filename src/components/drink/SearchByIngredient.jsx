import { useNavigate, useParams } from 'react-router-dom'
import ImagePanel from '../../layouts/ImagePanel'
import useFetchIngredient from '../../hooks/useFetchIngredient'

const SearchByIngredient = () => {
  const {ingredient} = useParams()
  const navigate = useNavigate()
  const {drink} = useFetchIngredient(ingredient, navigate)
  
  return (
    <>
    {
      drink ? <ImagePanel drinks={drink} /> : <Typography>No drinks found</Typography>
    }
  </>
  )
}

export default SearchByIngredient