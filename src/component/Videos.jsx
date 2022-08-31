import React from 'react'
import { Stack,Box,Typography } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({videos}) => {
    
  return (
    <Stack direction="row" flexWrap="warp" justifyContent="start" gap={2}>
        {videos.map((item,index)=>{
            return(
                <Box key={index}>
                    {item.id.videoId && <VideoCard item={item}/>}
                    {item.id.channelId && <ChannelCard item={item}/>}
                </Box>
            )
        })}
    </Stack>
  )
}

export default Videos