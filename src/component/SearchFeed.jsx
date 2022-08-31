import React,{useEffect,useState} from 'react'
import { Box,Typography } from '@mui/material'
import Sidber from './Sidber'
import Videos from './Videos'
import {fetchFromAPI} from '../utilits/fetchFromAPI'
import {useParams} from "react-router-dom"


function Feed() {

  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams()
  useEffect(() => {
    setVideos([]);

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);

    

  return (
    <Box p={2} sx={{overflowY:"auto",height:"90vh", flex:"2"}}>
            <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'#fff'}}>
                Seach Results For :
                <span style={{color:"#f31503"}}> Videos</span>
            </Typography>

            <Videos videos={videos} search={"search"}/>
        </Box>
  )
}

export default Feed