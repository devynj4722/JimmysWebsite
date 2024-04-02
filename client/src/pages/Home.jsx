import '../index.scss'
import './Home.scss'
import NavBar from './Components/Navbar';
import ItemListings from './Components/ItemListings';
import { HiMenu } from "react-icons/hi";
import React, { useState } from 'react';
import NavBar2 from './Components/Navbar2';
import Button from 'react-bootstrap/Button';
import { InputGroup, FormControl } from 'react-bootstrap';
import { IoIosSearch } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsCart2 } from "react-icons/bs";
import ItemInstance from './Components/ItemInstance';
import bsCard from './Components/bsCard';
import Footer from './Components/Footer';
import SaleModal from './Components/SaleModal';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';
import WebBanner from '../../public/Web Graphics/pfr-jimwh.png'
import ItemPagination from './Components/Nav/ItemPagination';
function Home() {
  console.log(WebBanner)
const  images = [
    './assets/Jim Pertyk/Off road car/IMG_1210.JPG',
    './assets/Jim Pertyk/Off road car/IMG_1198.JPG',
    './assets/Jim Pertyk/Off road 2 seatzexp  xe/IMG_1038.jpg',
    './assets/Jim Pertyk/Off road car/IMG_1145.JPG',
];

const [isModalOpen, setIsModalOpen] = useState(false);

const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
};
    return (
      <div className='access-root'>

     <div className='main-wrapper' >
     <div className='main-container'>
          <Link to='/'>

        
          <header className='Header-Section'>
            <h1>
             
              <div>
                <span className='Title-Header'>Off the Grid Racing and Restoration</span>
              
              </div>
            </h1>
          </header>
          </Link>
<div className='gutters'>


        
          <div className='current-status'>

      <Link to='/check-out'>
      <Button className='btn btn-rounded ' style={{marginBottom:'8px'}} ><BsCart2 /></Button> <span className='status-caption'>  &nbsp;  Open for Pick-Up and Shipping</span>
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
            <SaleModal isOpen={isModalOpen} toggleModal={toggleModal} />
             <Link to='/motorcycles'>

             <ItemInstance  onClick={toggleModal} Thumbnail={images[0]} Title='Motorcycles' />
             </Link>
             <Link to='/mcycle-parts'>

             <ItemInstance Thumbnail={images[1]} Title='Motorcycle parts'/>
             </Link>
             <Link to='/cars'>

             <ItemInstance   Thumbnail={images[2]} Title='Cars'/>
             </Link>
             <Link to='/car-truck-projects'>

             <ItemInstance  Thumbnail={images[3]}Title='Cars and Truck Projects'/>
           </Link>
           </div>
          </main>
          
        </div>

        <div className='Pagination'>
<ItemPagination />
        </div>
          <footer>
            <Footer />
          </footer>
        </div>
     </div>
        
        </div>
      );
};


export default Home;