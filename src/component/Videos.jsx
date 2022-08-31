import React from 'react'
import { Stack,Box} from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import Loader from './Loader'

const Videos = ({videos,direction,search}) => {
  if(!videos?.length) return <Loader />;
  return (
    <Stack  direction={ direction ? direction : "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
        {videos.map((item,index)=>{
            return(
                <Box key={index}>
                    {item.id.videoId && <VideoCard video={item} search={search}/>}
                    {item.id.channelId && <ChannelCard channelDetail={item}/>}
                </Box>
            )
        })}
    </Stack>
  )
}

export default Videos