import React from 'react'
import AccountCircle from './AccountCircle'
// import { GitHub, } from '@mui/icons-material';

    

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">

            <span>ADVANCE TYPING SPEED TEST</span>
           
            
           
            

        </div>
        <div className="icons">
            <AccountCircle/>
        </div>
    </div>
  )
}

export default Header