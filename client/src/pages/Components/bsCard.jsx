import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function BsCard({Thumbnail, Title, Description, Price, New, Link}) {
  return (
    <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={Thumbnail} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{Title}</MDBCardTitle>
        <MDBCardText>
         {Description}
        </MDBCardText>
        <MDBBtn href={Link}>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}