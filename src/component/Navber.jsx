import React from 'react'
import {logo} from '../utilits/constans'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBsr'


const Navber = () => {
  return (
    <Stack direction="row"
     p={2}
     alignItems="center"
     sx={{position:"sticky",background:"#000", top:"o", justifyContent: "space-between"}}
     >
        <Link to="/" state={{display:"flex",alignItems:"center"}}>
          <img src={logo} alt="" height={45}/>
        </Link>
        <SearchBar />
    </Stack>
  )
}

export default Navber