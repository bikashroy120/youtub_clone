import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import Navber from "./component/Navber";
import Feed from "./component/Feed";
import VideoDetail from './component/VideoDeteles'
import ChannelDetail from './component/ChannelDeteles'
import SearchFeed from './component/SearchFeed'



const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navber />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;