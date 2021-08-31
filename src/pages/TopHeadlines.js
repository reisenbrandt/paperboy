import { Box, Container, Typography, Grid, Paper, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import moment from 'moment'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "50px"
  },
  paper: {
    width: "500px",
    textAlign: "center",
    minHeight: "550px",
  },
  title: {
    padding: "8px",
  },
  author: {
    margin: "0"
  },
  image: {
    width: "450px",
    maxHeight: "300px"
  }, 
  description: {
    padding: "8px"
  }
})


export default function TopHeadlines() {
  const [results, setResults ] = useState([])
  const classes = useStyles();

  // useEffect(() => {
  //   fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c2791b40ded74e80945c31d37b320e2a')
  //     .then(res => res.json())
  //     .then(data => {
  //       setResults(data.articles)
  //     })
  // }, [])

  function renderImage(image) {
    if (!image) {
      return "/images/no-image-available.png"
    } else {
      return image
    }
  }

  return (
    <Box>
      <NavBar />
        <Container className={classes.root}>
          <Grid item xs={12}>
              <Grid container direction="row" justifyContent="center" spacing={2}>
                {results.map((result, index) => (
                  <Grid key={index} item>
                    <Paper className={classes.paper}>
                      <img className={classes.image} src={renderImage(result.urlToImage)} alt=""/>
                      <Typography variant="h6" className={classes.title}>
                        <a href={result.url}>{result.title}</a>
                      </Typography>
                      <Typography variant="subtitle2">By: {result.author} on {moment(`${result.publishedAt}`).format('LLL')}</Typography>
                      <Typography variant="body" className={classes.description}>{result.description}</Typography> 
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
        </Container>
    </Box>
  )
}
