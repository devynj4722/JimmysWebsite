
import './App.scss'

import ItemListings from './ItemListings';
import { HiMenu } from "react-icons/hi";
import React, { useState } from 'react';
import NavBar2 from './Navbar2'
import { InputGroup, FormControl } from 'react-bootstrap';
import { IoIosSearch } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';

function App() {
  return (
    <div className='shop-main-container'>
      <header className='shop-Header-Section'>
        <h1>
          Jimmy P's
          <div>
            <span className='shop-Title-Description'>Off the Grid Racing and Restoration</span>
          </div>
        </h1>
      </header>
      <NavBar2 />
      <div className='shop-current-status'>
      <BsCart2 /> &nbsp;  Open for Pick-Up and Shipping
      </div>
      <div className='shop-SearchBar'>
        <div className='shop-vendor-info'>
          <span>Hours Of Operation: 6 AM - 5 PM</span>
        </div>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1"><IoIosSearch />
</InputGroup.Text>
          <FormControl
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
      <div className='shop-relevance-headers'>
        <span className='shop-store-tag'>All Items</span>
        
          <label>
            
            <div className='shop-rel-sort'>
       <span id='sort'>Sort:</span>  
            <Dropdown>
      <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
        Best Match
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
 
          </label>
        </div>
      
      <main>
        <div className='shop-Item-container'>
          <ItemListings Count={6} />
        </div>
      </main>
      <aside>
        {/* Add content for the aside if needed */}
      </aside>
      <footer>
        {/* Add content for the footer if needed */}
      </footer>
    </div>
  );
}
export default App
