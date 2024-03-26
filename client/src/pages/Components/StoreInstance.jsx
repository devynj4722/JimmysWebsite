
import './ItemInstance.scss'
import IMG1 from '../../../public/Jim Pertyk/Off road 2 seatzexp  xe/IMG_1036.jpg'
import React from 'react';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';
function StoreInstance({Thumbnail, Title, Price, New, Link, onClick}) {
    console.log('Thumbnail prop inside ItemInstance:', Thumbnail); // Log the thumbnail prop
return(
<>
<article onClick={onClick} className="listing-item-card">
    <div className='listing-item-container'>
        <div className='listing-item-header'>
<picture role='button' href={Link}  className='item-picture item-picture-main'>

    
   

 <img src={Thumbnail} className='img-thumbnail' alt='test img'/>
 
   
</picture>
     </div>
   <div role='button'  id='listing-item-text-button'>
        <h3 className='listing-item-title-head'>
         <span className='listing-item-title'>
        
         {Title}
         </span>

        </h3>
    </div>
    <div className="listing-item-cost-container">
        <span className='listing-item-cost'>
            {Price}
        </span>
        <br></br>
        <span className='item-new'>
            {New}
        </span>
    </div>
        </div>


</article>

</>
)
}


export default StoreInstance