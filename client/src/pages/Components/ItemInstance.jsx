
import './ItemInstance.scss'
import IMG1 from '../../../public/Jim Pertyk/Off road 2 seatzexp  xe/IMG_1036.jpg'
import React from 'react';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';
function ItemInstance({Thumbnail, Title, Price, New, Link}) {
    console.log('Thumbnail prop inside ItemInstance:', Thumbnail); // Log the thumbnail prop
return(
<>
<article className="listing-item-card">
    <div className='listing-item-container'>
    <div className='sub-info'>

<div   id='listing-item-text-button'>
        <h3 className='listing-item-title-head'>
         <div className='listing-item-title'>
        
         {Title}
         </div>

        </h3>
    </div>
    <div className="listing-item-cost-container">
        <div className='listing-item-cost'>
            {Price}
        </div>
        <br></br>
        <div className='item-new'>
            {New}
        </div>

    </div>

</div>
        <div className='listing-item-header'>
<picture role='button'  className='item-picture item-picture-main'>

    


 <img src={Thumbnail} className='img' alt='test img'/>
  
   
</picture>

     </div>

 
        </div>


</article>

</>
)
}


export default ItemInstance