
import './Home.scss'
import NavBar from './Components/Navbar';
import ItemListings from './Components/ItemListings';
import { HiMenu } from "react-icons/hi";
import React, { useState } from 'react';
import NavBar2 from './Components/Navbar2';
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
function Home() {
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
          <aside>
            {/* Add content for the aside if needed */}
          </aside>
        </div>
          <footer>
            <Footer />
          </footer>
        </div>
      );
};


export default Home;