import { Button, Container, TextField, makeStyles, FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { actionSetCategory, actionSetSearch } from '../redux/actions/search';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "50px",
    flexWrap: "wrap"
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
    padding: "15px 0px 0px 14px"
  }
})

export default function SearchPage() {
  const searchTerm = useSelector(state => state.search.term)
  const category = useSelector(state => state.search.category)
  const dispatch = useDispatch();

  const classes = useStyles();
  
  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health", 
    "Science",
    "Sports",
    "Technology"
  ]

  const handleChange = (e) => {
    dispatch(actionSetCategory(e.target.value))
  };

  const handleSearch = (e) => {
    dispatch(actionSetSearch(e.target.value))
  }

  return (
    <>
      <NavBar />
      <Container className={classes.root}>
          <TextField id="outlined-basic" label="Search" variant="outlined" className={classes.textField} onChange={handleSearch} value={searchTerm} />
          <Button variant="outlined" className={classes.searchButton}><Link to={`/results/${category}/${searchTerm}`}>Search</Link></Button>
        <Container className={classes.categories}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-autowidth-label">Categories:</InputLabel>
            <NativeSelect
              labelid="demo-simple-select-autowidth-label"
              id="demo-simple-select"
              value={category}
              onChange={handleChange}
              className={classes.menuItem}
            >
              { categories.map((category, index) => {
                return <option value={category} key={index} className={classes.menuItem}>{category}</option>
              })}
            </NativeSelect>
          </FormControl>
        </Container>
      </Container>
    </>
  )
}
