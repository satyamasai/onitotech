import React from 'react'
import "./Navbar.css"
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
     <div>
     <Button size={'sm'}>
     <Link to='/datatable'>Data Table</Link>
     </Button>
     <Button size={'sm'}>
     <Link to='/'>Home</Link>
     </Button>
     </div>
    
    
    </div>
  )
}

export default Navbar