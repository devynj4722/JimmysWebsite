import React from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

export default function ItemPagination() {
  return (
    <nav aria-label='...'>
      <MDBPagination className='mb-0'>
        <MDBPaginationItem disabled>
          <MDBPaginationLink    href='#' tabIndex={-1} aria-disabled='true'>
            Previous
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem active>
          <MDBPaginationLink  href='#'>1</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem  aria-current='page'>
          <MDBPaginationLink href='#'>
            2 
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>3</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>Next</MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </nav>
  );
}