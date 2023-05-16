import { Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ListLetter = () => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65)
  const alphabet = alpha.map((x) => String.fromCharCode(x))
  const numbers = Array.from(Array(10).keys())

  return (
    <>
      <Toolbar />
      <Typography align='center'>Browse by Name</Typography>
      <Typography align='center'>
        {alphabet.map((letter, index) => {
          return (
            <React.Fragment key={index}>
              <Link to={`/drink/letter/${letter}`} reloadDocument>
                {letter}
              </Link>
              {letter != 'Z' && <> / </>}
            </React.Fragment>
          )
        })}
      </Typography>
      <Typography align='center'>
        {numbers.map((number, index) => {
          return (
            <React.Fragment key={index}>
              <Link to={`/drink/letter/${number}`} reloadDocument>
                {number}
              </Link>
              {number != '9' && <> / </>}
            </React.Fragment>
          )
        })}
      </Typography>
    </>
  )
}

export default ListLetter