
import '../App.scss'
import NavBar from '../Components/Navbar';
import StoreInstance from '../Components/StoreInstance';
import { HiMenu } from "react-icons/hi";
import React, { useState } from 'react';
import NavBar2 from '../Components/Navbar2';
import { InputGroup, FormControl } from 'react-bootstrap';
import { IoIosSearch } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsCart2 } from "react-icons/bs";
import SaleModal from '../Components/SaleModal';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';

function ItemListings({ Count, toggleModal  }) {
  console.log(toggleModal)
  const instances = Array.from({ length: Count }, (_, index) => index + 1);
  const images = [
   
    './assets/Jim Pertyk/Off road car/IMG_1254.JPG',
    './assets/Jim Pertyk/Off road car/IMG_1255.JPG',
    './assets/Jim Pertyk/Off road car/IMG_1256.JPG',
    './assets/Jim Pertyk/Off road car/IMG_1257.JPG',
    // Add more image paths here if needed
  ];
  const price = [
    '$9,000',
    '$10,000',
    '$11,000',
    '$12,000'
  ]
  // Log the images array to verify its contents

  return (
    <>
      {instances.map((instance, index) => {
        const Thumbnail = images[index % images.length];
        const prices = price[index % price.length]
        console.log(Thumbnail); // Log the thumbnail prop to check its value
        return <StoreInstance  onClick={toggleModal} key={instance} Thumbnail={Thumbnail} Title='Ford' Price={prices}  New='Brand New!'/>
      })}
    </>
  );
}

function Motorcycles() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  console.log(isModalOpen)
  return (
    <div className='main-container'>
   <Link to='/'>

        
          <header className='Header-Section'>
            <h1>
              Jimmy P's
              <div>
                <span className='Title-Description'>Off the Grid Racing and Restoration</span>
              </div>
            </h1>
          </header>
          </Link>
      <NavBar2 />
      <div className='current-status'>
      <Link to='/check-out'>
      <button className='btn btn-rounded '><BsCart2 /></button> <span className='status-caption'>  &nbsp;  Open for Pick-Up and Shipping</span>
      </Link>   
      </div>
      <div className='SearchBar'>
        <div className='vendor-info'>
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
      <div className='relevance-headers'>
        <span className='store-tag'>All Items</span>
        
          <label>
            
            <div className='rel-sort'>
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
        <div className='Item-container'>
        <SaleModal state={isModalOpen} toggleModal={toggleModal}  />
          <ItemListings toggleModal={toggleModal} Count={4} />
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
export default Motorcycles
