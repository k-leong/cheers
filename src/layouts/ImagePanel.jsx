import { ButtonBase, ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ImagePanel = (props) => {
  const navigate = useNavigate()

  function drinkHandler(id) {
    navigate(`/drink/id/${id}`)
  }

  return (
    <ImageList cols={3} sx={{ width: '50%', height: '100%', margin: 'auto' }}>
      {props.drinks.map(({ idDrink, strDrink, strDrinkThumb }) => {
        return (
          <ImageListItem key={idDrink}>
            <img alt={strDrink} src={strDrinkThumb} loading='lazy' height='auto' width='100%' />
            <ButtonBase onClick={() => drinkHandler(idDrink)} size='small' >
              <ImageListItemBar title={strDrink} />
            </ButtonBase>
          </ImageListItem>
        )
      })}
    </ImageList>
  )
}

export default ImagePanel