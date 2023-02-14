import React, { useState } from 'react'
import './Gallery.css'
import {CgClose} from "react-icons/cg"

import img0 from '/GalleryImage/img0.jpg'
import img1 from '/GalleryImage/img1.jpg'
import img2 from '/GalleryImage/img2.jpg'
import img3 from '/GalleryImage/img3.jpg'
import img4 from '/GalleryImage/img4.jpg'
import img5 from '/GalleryImage/img5.jpg'
import img6 from '/GalleryImage/img6.jpg'



const Gallery = () => {

let data =[
  {
    id:0,
    imgSrc:img0,
  },

  {
    id:1,
    imgSrc:img1,
  }
,
  {
    id:2,
    imgSrc:img2,
  },

  {
    id:3,
    imgSrc:img3,
  }
,{
  id:4,
  imgSrc:img4,
},

{
  id:5,
  imgSrc:img5,
}
,
{
  id:6,
  imgSrc:img6,
}


]

const[model, setModel] = useState(false);
const [tempimgSrc , setTempImgSrc] = useState('');

const getImg = (imgSrc) =>{
  setTempImgSrc(imgSrc);
  setModel(true);

}



  return (
<>


    <div>
      <h2 style =  {{
        textAlign:'center' , fontSize:'6rem', 
        padding:'2rem',
        color:'black',
        fontWeight:'500',
        textTransform:'uppercase'
         }}> Image Gallery </h2>
      <h3 style =  {{textAlign:'center',fontSize:'20px' ,paddingBottom:'2rem'}}> Photo Collection of AMC IT CLUB </h3>


      <div className={model? "model open" : "model"} >
  <img src={tempimgSrc}  />
  <CgClose  onClick={()=>setModel(false)} />
 

</div>


<div className='gallery'> 
{data.map((item, index)=>{
  return(
    <div className='pics' key={index} onClick ={()=>getImg(item.imgSrc)} >
      <img src={item.imgSrc} style={{width:'100%'}} />

      
    </div>
  )
})}

</div>

    </div>
    </>
    
    
  )
}

export default Gallery
