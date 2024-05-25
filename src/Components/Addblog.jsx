import { Box, Button, TextField, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';




const Addblog = () => {
  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <Typography variant='h2'>ADD BLOG</Typography>
        <br /><br />
        <Box><AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>&nbsp;&nbsp;<TextField id="input-with-sx" label="Blog Name" variant="standard" /></Box>&nbsp;&nbsp;&nbsp;&nbsp;
        <Box><AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /><TextField id="input-with-sx" label="Author Name" variant="standard" /></Box>&nbsp;&nbsp;&nbsp;&nbsp;
        <Box><AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /><TextField id="input-with-sx" label="Description" variant="standard" /></Box>&nbsp;&nbsp;&nbsp;&nbsp;
        <br /><br />
        <Button variant="outlined">SUBMIT</Button>






      
    </div>
  )
}

export default Addblog
