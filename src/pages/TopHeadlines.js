import { Container, Typography, Grid, Paper, makeStyles } from '@material-ui/core'
import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { actionSetResults } from '../redux/actions/search'

const useStyles = makeStyles({
  root: {
    marginTop: "32px",
    maxWidth: "1900px",
    height: "475px",
    padding: "16px"
  },
  paper: {
    width: "525px",
    textAlign: "center",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: "16px 8px 8px 8px",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)"
    }
  },
  title: {
    width: "480px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: "1.2em",
    height: "3em",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 2,
    paddingBottom: "12px",
    paddingLeft: "20px"
  },
  author: {
    margin: "0"
  },
  image: {
    width: "450px",
    maxHeight: "300px",
    border: "2px solid #666",
    borderRadius: "4px",
    margin: "8px"
  }, 
  description: {
  },
  linkOverride: {
    color: "black",
    textDecoration: "none"
  }
})


export default function TopHeadlines() {
  const results = useSelector(state => state.search.results);
  const dispatch = useDispatch(); 

  const classes = useStyles();

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c2791b40ded74e80945c31d37b320e2a')
      .then(res => res.json())
      .then(data => {
        dispatch(actionSetResults(data.articles))
      })
  }, [dispatch])

  function renderImage(image) {
    if (!image) {
      return "/images/no-image-available.png"
    } else {
      return image
    }
  }

  if (!results) {
    return 'Loading...'
  }

  return (
    <>
      <NavBar />
        <Container className={classes.root}>
          <Grid item xs={12}>
              <Grid container direction="row" justifyContent="center" spacing={5}>
                {results.map((result, index) => {
                  return (<Grid key={index} item>
                    <Paper className={classes.paper}>
                      <a href={result.url} className={classes.linkOverride}>
                      <span>
                        <Typography variant="h6" className={classes.title} title={result.title}>
                          {result.title}</Typography>
                        <img className={classes.image} src={renderImage(result.urlToImage)} alt=""/>
                        <Typography variant="subtitle2">By: {result.author} on {moment(`${result.publishedAt}`).format('LLL')}</Typography>
                      </span>
                      <span>
                        <Typography variant="body1" className={classes.description}>{result.description}</Typography> 
                      </span>
                      </a>
                    </Paper>
                  </Grid>
                )})}
              </Grid>
            </Grid>
        </Container>
    </>
  )
}
