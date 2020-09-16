import React , { useState } from 'react' ;
import { Grid } from '@material-ui/core' ;
import youtube from './api/youtube' ;
import SearchBar from './Components/SearchBar';
import VideoDetail from './Components/VideoDetail';
import axios from 'axios' ;
import VideoList from './Components/VideoList';



const App = () => {

    const handleSubmit =  async (e) => {
         
        e.preventDefault() ;

    }

    const [video,setVideo] = useState( { videos : [] , selectedVideo : null } ) ;

    return (
        
        <Grid container justify="center" spacing = {10} >

          <Grid item xs={12} >
                 
                 <Grid container spacing= {10} >

                    <Grid item xs = {12} >
                     
                        <SearchBar handleSubmite = { handleSubmit } video = { video } setVideo = { setVideo }  />
                    

                        {/* <button onClick= { () => handleSubmit } > dubmit</button> */}
                    </Grid>

                    <Grid item xs = {8} >
                        <VideoDetail props = { video , setVideo }  />
                    </Grid>
                    <Grid item xs = {4}>
                        <VideoList />
                    </Grid>

                 </Grid>

          </Grid>


        </Grid>

    )
}

export default App
