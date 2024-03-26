import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <div style={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>

<div style={{marginRight:'10%'}}>
    Send A Message to Jim, 
    <br/>
    Email: goldinthedesert@gmail.com
   <br/>
    Phone: 310-844-3347
</div>
   
    <form>
      <MDBInput id='form4Example1' wrapperClass='mb-4' placeholder='Name' />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' placeholder='Email address' />
      <MDBInput wrapperClass='mb-4' textarea='true' id='form4Example3' rows={4} placeholder='Message' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='Send me a copy of this message'
        defaultChecked
      />

     <Button active>
       Send Message
     </Button>
    </form>
    </div>
  );
}