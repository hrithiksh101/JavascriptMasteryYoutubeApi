import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core';
import axios from 'axios';

const SearchBar = (props) => {
  const [state, setState] = useState({ searchItem: '' });

  const { video, setVideo, handleSubmite } = props;

  //   const { handleSubmite } = props;

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('state changed', state);

    

    try {
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            part: 'snippet',
            maxResults: 5,
            key: 'AIzaSyCgGpSCJQ_rZNbWBIuT0qX2bUYvLdC9KIU',
            q: state.searchItem
          }
        }
      )

      console.log( ' this is the response' , response ) ;



      setVideo({
        ...video,
        videos: response.data.items,
        setVideo: response.data.items[0],
      });
    } catch (error) {
      console.log(error);
    }

    // .then( resp => resp.data.items.map( item => item ) ) ;
  };

  const handleChange = (e) => {
    e.preventDefault();

    setState({ ...state, searchItem: e.target.value });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <Paper elevation={6} style={{ padding: '25px' }}>
        <TextField
          fullWidth
          label="search..."
          onChange={handleChange}
        ></TextField>
      </Paper>
    </form>
  );
};

export default SearchBar;
