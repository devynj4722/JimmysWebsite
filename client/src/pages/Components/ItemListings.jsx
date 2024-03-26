import React from "react";
import ItemInstance from "./ItemInstance";
function ItemListings({ Count }) {
  const instances = Array.from({ length: Count }, (_, index) => index + 1);
  const images = [
    'src/assets/Jim Pertyk/Off road 2 seatzexp  xe/IMG_1038.jpg',
    'src/assets/Jim Pertyk/Off road 2 seatzexp  xe/IMG_1036.jpg',
    'src/assets/Jim Pertyk/Off road car/IMG_1027.jpg',
    'src/assets/Jim Pertyk/Off road car/IMG_1028.jpg',
    // Add more image paths here if needed
  ];
  
  console.log(images); // Log the images array to verify its contents

  return (
    <>
      {instances.map((instance, index) => {
        const Thumbnail = images[index % images.length];
        console.log(Thumbnail); // Log the thumbnail prop to check its value
        return <ItemInstance key={instance} Thumbnail={Thumbnail} Title='Ford' />;
      })}
    </>
  );
}

export default ItemListings