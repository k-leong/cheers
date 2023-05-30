import { useParams } from 'react-router-dom'
import ImagePanel from '../../layouts/ImagePanel'
import useFetchName from '../../hooks/useFetchName'

const SearchByName = () => {
  const { name } = useParams()
  const {drink} = useFetchName(name)

  return (
    <>
    {
      drink ? <ImagePanel drinks={drink} /> : <Typography>No drinks found</Typography>
    }
  </>
  )
}

export default SearchByName