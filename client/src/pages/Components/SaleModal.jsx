import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import './SaleModel.scss'
import Carousel from 'react-bootstrap/Carousel';
import { Stack } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function SaleModal({state, toggleModal}) {
  console.log(state,toggleModal)
const pictures = [
  {_id:1,},
  {_id:2,},
  {_id:3,},
  {_id:4,},
  {_id:5,},
  {_id:6,},
  {_id:7,},
  {_id:8,},
]
  return (
    <>

    

      <MDBModal  open={state} onClick={toggleModal} tabIndex='-1'>
        <MDBModalDialog size="xl">
          <MDBModalContent >
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='red' onClick={toggleModal}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
<MDBRow>


                <MDBCol size='md-6'>
                <img
      src='https://mdbootstrap.com/img/new/standard/city/041.webp'
      className='img-thumbnail'
      alt='...'
    />
       

        <Carousel>
      {pictures.map((pictures, index) => (
      <Carousel.Item>

        
      <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                
              >

        
        <Card key={pictures._id}>
            <Card.Img   src='https://mdbootstrap.com/img/new/standard/city/041.webp'   />
        </Card>
                         
        <Card key={pictures._id}>
            <Card.Img   src='https://mdbootstrap.com/img/new/standard/city/041.webp'    />
        </Card>
                     
        <Card key={pictures._id}>
            <Card.Img   src='https://mdbootstrap.com/img/new/standard/city/041.webp'   />
        </Card>

        <Card key={pictures._id}>
            <Card.Img   src='https://mdbootstrap.com/img/new/standard/city/041.webp'    />
        </Card>
               
                     
                      </Stack>
      </Carousel.Item>
    
    
      ))}
    </Carousel>
                </MDBCol>
                
  <MDBCol size='md-6'>

    <h2>
    Lionel Chesapeake & Ohio Streamline Hudson & Tender w/Sound, Light & Smoke O
    </h2>
    <div className='listing-condition'>
Used
    </div>
<div className='listing-price'>
US $599.99
</div>
<div className='listing-shipping'>
+$43.40 Shipping
</div>
<div className='listing-menu-group'>
<span style={{display:'flex',alignItems:'center'}}>Quantity:<Form.Control type="text" style={{width:'100%'}} placeholder="1" readOnly /></span>
</div>

           <Link to='/check-out'>
           
           <Button variant='primary' style={{width:'100%'}} active>Add to cart</Button>
           </Link>   
                </MDBCol>
                </MDBRow>

            </MDBModalBody>

            <MDBModalFooter>
              <Button color='secondary' onClick={toggleModal}>
                Close
              </Button>
              
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}