import { Box, Button, Container, TextField, AppBar } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SearchPage() {
  // const [results, setResults ] = useState([]);

  // function fetchResults() {
  //   fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c2791b40ded74e80945c31d37b320e2')
  //   // fetch('../data.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //     })
  // }
  return (
    <Box>
      <Container>
      <AppBar />
        <TextField id="outlined-basic" label="Search" variant="outlined" /><br />
        <Button variant="outlined"><Link to="/results" >Search</Link></Button>
      </Container>
    </Box>
  )
}
