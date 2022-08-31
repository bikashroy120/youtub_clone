import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utilits/constans'

const Sidber = ({setSelectedCategory,selectedCategory}) => {
    const catagoryselect = 'New';
  return (
    <Stack
    direction="row"
    sx={{
        overflowY:'auto',
        height:{sx:'auto',md:'95%'},
        flexDirection:{md:"column"}
    }}
    >
        {categories.map((catagory)=>{
            return(
                <button
                key={catagory.name}
                onClick={()=>setSelectedCategory(catagory.name)}
                className='category-btn'
                style={{
                    background: catagory.name===selectedCategory && '#fc1503',
                    color: '#fff'
                }}
                >
                    <span style={{color : catagory.name===selectedCategory ? "#fff" : "red",
                    marginRight:'15px'
                }}>{catagory.icon}</span>
                    <span style={{opacity: catagory.name===selectedCategory ? '1': '0.8'}}>{catagory.name}</span>
                </button>
            )
        })}
    </Stack>
  )
}

export default Sidber