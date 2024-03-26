import React, { useState } from 'react';
import './Navbar2.scss'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';
function NavBar2() {

return (

<>
<Nav defaultActiveKey="/" className="flex-column">
    
    <Link to='/shop'>
    
    Shop
    </Link>  
    <Link to='/contact'>
    
    
      Contact
    </Link>
  
       
    </Nav>

</>
)
}

export default NavBar2