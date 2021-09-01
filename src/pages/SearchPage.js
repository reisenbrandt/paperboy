import { Box, Button, Container, TextField, makeStyles, FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

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
    height: "1.1876em",
    padding: "18.5px 14px",
    margin: 0
  },
  menuItem: {
    width: "200px"
  }
  // categories: {
  //   border: "1px solid black"
  // }
})

export default function SearchPage() {
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ category, setCategory ] = useState('');
  const classes = useStyles();
  const categories = [
    "",
    "Business",
    "Entertainment",
    "General",
    "Health", 
    "Science",
    "Sports",
    "Technology"
  ]

  const handleChange = (event) => {
    setCategory(event.target.value)
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  

  return (
    <Box>
      <NavBar />
      <Container className={classes.root}>
        <TextField id="outlined-basic" label="Search" variant="outlined" className={classes.textField} onChange={handleSearch} value={searchTerm} />
        <Button variant="outlined"><Link to={`/results/${category}/${searchTerm}`} className={classes.searchButton}>Search</Link></Button>
        <Container className={classes.categories}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-autowidth-label">Categories:</InputLabel>
            <NativeSelect
              labelId="demo-simple-select-autowidth-label"
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
    </Box>
  )
}
