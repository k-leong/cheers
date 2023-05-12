import { Toolbar, Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

const ListLetter = () => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65)
  const alphabet = alpha.map((x) => String.fromCharCode(x))

  return (
    <>
      <Toolbar />
      <Typography align="center">Browse by Name</Typography>
      <Typography align='center'>
        {alphabet.map((letter, index) => {
          return (
            <React.Fragment key={index}>
              <Link to={`/drink/letter/${letter}`}>
                {letter}
              </Link>
              {letter != 'Z' && <> / </>}
            </React.Fragment>
          )
        })}
      </Typography>
    </>
  )
}

export default ListLetter