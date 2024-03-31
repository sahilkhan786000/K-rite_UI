import React , { useState } from 'react'
import { Box, Typography, Button , Menu, MenuItem} from '@mui/material'
import logo from './logo.png'
import dp from './dp.png'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import design from './design.jpeg'
import development from './development.png'
import marketing from './marketing.png'
import form from './form.png'
export default function Sidebar() {
    const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx= {{ padding : '5px',display: 'flex' , flexDirection: 'column',backgroundColor: 'white', minheight: '100vh', minWidth:'15vw', borderRadius: '10px',  border: '1px solid #CCCCCC'}}>

    <Box sx = {{ padding : '10px', display: 'flex', gap: '20px', borderRadius: '10px', border : '1px solid #CCCCCC'}}>
        <Box sx={{height : '90%', width : '15%', padding : '5px', backgroundColor: 'black', borderRadius: '10px'}}>
        <img src={logo} style={{width: '85%', height: '85%'}} alt = 'logo'/></Box>

        <Box sx={{display: 'flex', flexDirection: 'column'}}> 
        <Typography sx={{ fontSize: '12px',color: 'grey'}}>|/\|C</Typography>
        <Typography sx={{fontSize: '14px',color: 'black', fontWeight: 'bold'}}>InnovativeHub</Typography>
        </Box>

       
        <img src={dp} style={{width: '15%', height: '60%'}} alt = 'dp'/>
        

        
    </Box>

    <Box sx={{ mt : '10px',display: 'flex', flexDirection: 'column'}}>

        <Box sx={{  padding : '10px',display : 'flex',  gap : '20px' , align : 'center', border : '1px solid #CCCCCC'}}> 
        <img src={design} style={{ width: '10%', height: '70%'}} alt = 'design' /> 
        <Typography sx={{ mt : '10px',fontSize: '14px',color: 'black', fontWeight: 'bold'}}>Design Team</Typography>
        <Button sx={{ mt : '10px',height : '30px', ml : 'auto', borderRadius: '10px', border : '1px solid #CCCCCC', fontSize: '12px',backgroundColor: 'lightgrey', color: 'grey', fontWeight: 'bold'}}> X + 1 </Button>
        </Box>


        <Box sx={{  padding : '10px',display : 'flex',  gap : '20px' , align : 'center', border : '1px solid #CCCCCC'}}> 
        <img src={marketing} style={{ width: '10%', height: '70%'}} alt = 'marketing' /> 
        <Typography sx={{ mt : '10px',fontSize: '14px',color: 'black', fontWeight: 'bold'}}>Marketing Team</Typography>
        <Button sx={{ mt : '10px',height : '30px', ml : 'auto', borderRadius: '10px', border : '1px solid #CCCCCC', fontSize: '12px',backgroundColor: 'lightgrey', color: 'grey', fontWeight: 'bold'}}> X + 1 </Button>
        </Box>

        <Box sx={{  padding : '10px',display : 'flex',  gap : '20px' , align : 'center', border : '1px solid #CCCCCC'}}> 
        <img src={development} style={{width: '10%', height: '70%'}} alt = 'development' /> 
        <Typography sx={{ mt : '10px',fontSize: '14px',color: 'black', fontWeight: 'bold'}}>Development team</Typography>
        <Button sx={{ mt : '10px',height : '30px', ml : 'auto', borderRadius: '10px', border : '1px solid #CCCCCC', fontSize: '12px',backgroundColor: 'lightgrey', color: 'grey', fontWeight: 'bold'}}> X + 1 </Button>
        </Box>

        <Box sx={{  padding : '10px',display : 'flex' , align : 'center', border : '1px solid #CCCCCC'}}> 
        <img src={form} style={{width: '10%', height: '70%'}} alt = 'form'/> 
        <Typography sx={{ ml : '20px',mt : '5px',fontSize: '14px',color: 'grey', fontWeight: 'bold'}}>Create a form</Typography>
        </Box>

        </Box>

        <Box>
         <Box sx={{ padding : '5px' ,display: 'flex'}}>
          <Typography sx={{ ml : '5px',mt : '10px',fontSize: '14px',color: 'grey', fontWeight: 'bold'}}>FORLDERS</Typography>
          <Typography sx={{ ml : 'auto',mt : '10px',fontSize: '14px',color: 'grey', fontWeight: 'bold'}}>+</Typography>
         </Box>
         
         <Box sx={{ padding: '10px', display: 'flex', align: 'center', cursor: 'pointer' }} onClick={handleClick}>
         <FolderOutlinedIcon sx={{ ml: '5px', mt: '10px', color: 'grey' }}/>
          <Typography sx={{ml: '20px', mt: '10px', fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>Products</Typography>
          <Typography sx={{ml:'auto', mt: '10px', fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>-</Typography>
        </Box>

        {/* Menu for Products Dropdown */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Roadmap</MenuItem>
          <MenuItem onClick={handleClose}>Feedback</MenuItem>
          <MenuItem onClick={handleClose}>Performances</MenuItem>
          <MenuItem onClick={handleClose}>Team</MenuItem>
          <MenuItem onClick={handleClose}>Analytics</MenuItem>
          <MenuItem onClick={handleClose} sx={{color : 'grey'}}>
          <AddBoxOutlinedIcon sx={{ mr: '5px', color: 'grey' }}/>
          Add new Sub</MenuItem>

        </Menu>
        
        <Box sx={{ padding: '10px', display: 'flex', align: 'center',  cursor: 'pointer' }} >
         <FolderOutlinedIcon sx={{ ml: '5px', mt: '10px', color: 'grey' }}/>
          <Typography sx={{ml: '20px', mt: '10px', fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>Sales</Typography>
          <Typography sx={{ml:'auto', mt: '10px', fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>-</Typography>
        </Box>

        <Box sx={{ padding: '10px', display: 'flex', align: 'center', cursor: 'pointer' }} >
         <FolderOutlinedIcon sx={{ ml: '5px', mt: '10px', color: 'grey' }}/>
          <Typography sx={{ml: '20px', mt: '10px', fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>Design</Typography>
          <Typography sx={{ml:'auto', mt: '10px', fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>-</Typography>
        </Box>

         <Box sx={{ padding: '10px', display: 'flex', align: 'center', cursor: 'pointer' }} >
         <FolderOutlinedIcon sx={{ ml: '5px', mt: '10px', color: 'grey' }}/>
          <Typography sx={{ml: '20px', mt: '10px', fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>Office</Typography>
          <Typography sx={{ml:'auto', mt: '10px', fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>-</Typography>
        </Box>

        <Box sx={{ padding: '10px', display: 'flex', align: 'center', cursor: 'pointer' }} >
         <FolderOutlinedIcon sx={{ ml: '5px', mt: '10px', color: 'grey' }}/>
          <Typography sx={{ml: '20px', mt: '10px', fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>Legal</Typography>
          <Typography sx={{ml:'auto', mt: '10px', fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>-</Typography>
        </Box>
        </Box>

        <Box sx= {{mt : '100px',display : 'flex', flexDirection : 'column'}}>

        <Box sx={{ padding: '10px', display: 'flex', align: 'center', cursor: 'pointer' }} >
         <PersonAddAltOutlinedIcon sx={{ ml: '5px', mt: '10px', color: 'grey' }}/>
          <Typography sx={{ml: '20px', mt: '10px', fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>Invite teammates</Typography>
          
        </Box>

        <Box sx={{ padding: '10px', display: 'flex', align: 'center', cursor: 'pointer' }} >
         <HelpOutlineOutlinedIcon sx={{ ml: '5px', mt: '10px', color: 'grey' }}/>
          <Typography sx={{ml: '20px', mt: '10px', fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>Help and first steps</Typography>
          <Box sx={{ display : 'flex', padding: '5px', borderRadius : '10px', width : '27px', height : '18px', ml:'auto', mt: '10px',border : '1px solid grey'}}>
           <ThumbUpOutlinedIcon sx={{fontSize : '12px' ,color : "grey" }}/> 
           <Typography sx={{color : 'grey',fontSize : '12px' }}>10</Typography>
          </Box>
        </Box>

        <Box sx={{ padding: '10px', display: 'flex', align: 'center', cursor: 'pointer' }}>
         <QuestionMarkOutlinedIcon sx={{ ml: '5px', mt: '10px', color: 'grey' }}/>
          <Typography sx={{ml: '20px', mt: '10px', fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>days left on trial</Typography>
          <Button  sx={{ml : 'auto', mt: '10px', color:'white',  backgroundColor:'black' , width : '100px', fontSize:  '10px' }}>Add billing</Button>
        </Box>

        </Box>

    </Box>
  )
}
