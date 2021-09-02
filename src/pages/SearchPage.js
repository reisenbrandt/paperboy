import { Button, Container, TextField, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { actionSetEndDate, actionSetSearch, actionSetStartDate } from '../redux/actions/search';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "50px",
    flexWrap: "wrap",
  },
  textField: {
    width: "75%"
  },
  searchButton: {
    height: "56px",
    padding: "18.5px 14px",
    margin: 0
  },
  menuItem: {
    width: "200px"
  },
  categories: {
    padding: "15px 0px 0px 14px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "50%"
  },
  date: {
    margin: "12px",
    width: "150px"
  },
  title: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  search: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  caption: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center"
  }
})

export default function SearchPage() {
  const searchTerm = useSelector(state => state.search.term)
  const startDate = useSelector(state => state.search.startDate)
  const endDate = useSelector(state => state.search.endDate)
  const dispatch = useDispatch();

  const classes = useStyles();
  

  const handleChangeStart = (e) => {
    dispatch(actionSetStartDate(e.target.value))
  };

  const handleChangeEnd = (e) => {
    dispatch(actionSetEndDate(e.target.value))
  };

  const handleSearch = (e) => {
    dispatch(actionSetSearch(e.target.value))
  }

  return (
    <>
      <NavBar />
      <Container className={classes.root}>
        <span className={classes.title}>
          <Typography variant="h1" gutterBottom>PaperBoy</Typography>
          <Typography variant="h6" gutterBottom>Search through thousands of news websites for the most recent information available!</Typography>
          </span>
          <div className={classes.search}>
          <TextField id="outlined-basic" label="Search" variant="outlined" className={classes.textField} onChange={handleSearch} value={searchTerm} />
          <Button variant="outlined" className={classes.searchButton}><Link to={`/results/${startDate}/${endDate}/${searchTerm}`}>Search</Link></Button>
          </div>
        <Container className={classes.categories}>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="Start Date"
            type="date"
            defaultValue="2021-08-15"
            className={classes.date}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChangeStart}
          />
        </form>
        <form className={classes.container} noValidate>
        <TextField
            id="date1"
            label="End Date"
            type="date"
            defaultValue="2021-09-02"
            className={classes.date}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChangeEnd}
          />
        </form>
        </Container>
        <span className={classes.caption}>
          <Typography variant="caption" gutterBottom>* Due to the restrictions of the API, you can not search for news that is more than a month old. <br />
          So please. Don't try it. The API gets mad at me, and neither of us want that.</Typography>
        </span>
      </Container>
    </>
  )
}
