import React from 'react';
import { Stack, Typography } from '@mui/material';
import { categories } from '../utils/constans';
const Sidebar = ({ selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
        direction='row'
        sx={{
            overfolwY: 'auto',
            height: {sx: 'auto', md: '95%'},
            flexDirection: { md: 'column'}
            }}
    >
        {categories.map((category) => (
            <button
                className='category-btn'
                onClick={() => setSelectedCategory(category.name)}
                style={{
                    background: category.name === selectedCategory && '#fc1503',
                    color: '#fff'
                }}
                key={category.name}
                >   
                <span 
                    style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px'}}
                >{category.icon}</span>
                <span 
                    style={{ opacity: category.name === selectedCategory ? '1' : '0.7', marginRight: '15px'}} 
                >{category.name}</span>
            </button>
        ))}
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff'}}
        >
          Copyright 2022 Mahmoud Alshukri
        </Typography>
    </Stack>
  )
}

export default Sidebar