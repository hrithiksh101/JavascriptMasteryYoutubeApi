import React from 'react' ;
import { Paper , Typography } from '@material-ui/core' ;


const VideoDetail = ( { video , setVideo } ) => {



    if ( !video ) return <div>Loading...</div> ;



    const VideoList = video.videos.map( (v) => v ) ;
    
    let videoSrc ;

    console.log( video , setVideo , 'i scream at the window' ) ;

    if ( VideoList[0] ){

      

        const singleVideo = VideoList[0] ?  VideoList[0].id.videoId :null ;
        console.log(' This is for the single video ' , singleVideo ) ;    
         videoSrc = `https://www.youtube.com/embed/${singleVideo}` ? `https://www.youtube.com/embed/${singleVideo}` : null ;


    }else {
        videoSrc = null ;

        return <div> Loading ...</div>

    }

 


    // const videoSrc = null ;

    
    return (
        <div>
            <Paper elevation = {6} style = { { height : '70%' } } >

               <iframe src="" frameBorder="0" height = "100%" width = "100%" title = "Video Player"  src = {videoSrc} />

            </Paper>            
            <Paper elevation = {6} style = { { padding : '15px' } } >


              <Typography variant = "h6" > { VideoList[0].snippet.title }  {  }  </Typography>
              <Typography variant = "subtitle1" > { VideoList[0].snippet.channelTitle } </Typography>
              <Typography variant = "subtitle2" > { VideoList[0].snippet.description } </Typography>



            </Paper>            
        </div>
    )
}

export default VideoDetail
