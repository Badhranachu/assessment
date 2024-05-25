import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h6'>BLOG&nbsp;&nbsp;</Typography>
                <Link to='/H'><Button variant="contained" color='error'>HOME</Button></Link>&nbsp;&nbsp;&nbsp;
                <Link to='/A'><Button variant="contained" color='success'>ADD BLOG</Button></Link>&nbsp;&nbsp;&nbsp;
                <Link to='/V'><Button variant="contained" color='success'>VIEW</Button></Link>&nbsp;&nbsp;&nbsp;


            </Toolbar>
        </AppBar>
      
    </div>
  )
}

export default Navbar
