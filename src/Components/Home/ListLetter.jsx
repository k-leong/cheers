import { Toolbar } from "@mui/material"
import { Link } from "react-router-dom"



const ListLetter = () => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65)
  const alphabet = alpha.map((x) => String.fromCharCode(x))

  alphabet.map((letter) => {
    console.log(letter)
  })
  return (
    <>
      <Toolbar />
      {alphabet.map((letter, index) => {
        return (
          <Link key={index} to={`/drink/letter/${letter}`}>{letter}</Link>
        )
      })}
    </>
  )
}

export default ListLetter