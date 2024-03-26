import React, { useState } from 'react';
import './Navbar2.scss'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';
function NavBar2() {

return (

<>
<Nav defaultActiveKey="/" className="flex-column">
    
    <Link to='/shop'>
    
    <Nav.Link  eventKey="/shop">Shop</Nav.Link>
    </Link>  
    <Link to='/contact'>
    
    
      <Nav.Link  eventKey="link-2">Contact</Nav.Link>
    </Link>
  
       
    </Nav>

</>
)
}

export default NavBar2