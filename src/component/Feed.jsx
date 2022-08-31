import React,{useEffect,useState} from 'react'
import { Stack,Box,Typography } from '@mui/material'
import Sidber from './Sidber'
import Videos from './Videos'
import {fetchFromAPI} from '../utilits/fetchFromAPI'


function Feed() {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{flexDirection:{sx:"column", md:"row"}}}>
        <Box sx={{height:{sx:'auto', md:"90vh"},borderRight:"1px solid #3d3d3d", px:{sx:"0",md:"2"}}}>
            <Sidber selectedCategory ={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <Typography className='copyright' variant='body2' sx={{mt:1.5,color:"#fff"}}>
                Copyright 2022 BKR Media
            </Typography>
        </Box>
        <Box p={2} sx={{overflowY:"auto",height:"90vh", flex:"2"}}>
            <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'#fff'}}>
                {selectedCategory}
                <span style={{color:"#f31503"}}> Videos</span>
            </Typography>

            <Videos videos={videos}/>
        </Box>
    </Stack>
  )
}

export default Feed