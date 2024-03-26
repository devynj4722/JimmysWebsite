import React, { useState } from 'react';
import './Navbar2.scss'
import Nav from 'react-bootstrap/Nav';
function NavBar2() {

return (

<>
<Nav defaultActiveKey="/" className="flex-column">
    
      <Nav.Link href='/shop' eventKey="/shop">Shop</Nav.Link>
      <Nav.Link href='/contact' eventKey="link-2">Contact</Nav.Link>
  
       
    </Nav>

</>
)
}

export default NavBar2