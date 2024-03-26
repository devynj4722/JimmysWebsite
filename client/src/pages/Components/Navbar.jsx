import React, { useState } from 'react';
import './Navbar.scss'

function NavBar() {
    const [navEnabled, setNav] = useState(false);

    const openNav = () => {
        setNav(true);
      };
    
      const closeNav = () => {
        setNav(false);
      };
    
return (

<>
    <div id="mySidenav" className={navEnabled ? "sidenav open" : "sidenav"}>
<button onClick={openNav}>Open Nav</button>
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
  <a href="#">About</a>
  <a href="#">Shop</a>
  <a href="#">Contact</a>
  
</div>

</>
)
}

export default NavBar