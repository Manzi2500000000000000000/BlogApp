import React from 'react';
import "./SinglePost.css";
import Gwag from "./Gwag.jpg";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";


export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src={Gwag} className='singlePostImg' />

        <h1 className="singlePostTitle">Mercedez-Benz G-Class
        <div className="singlePostEdit">
        <CiEdit className='singlePostIcon'/>
        <MdDelete className='singlePostIcon'/>


        </div>
         </h1>
         <div className="singlePostInfo">
            <span className='singlePostManu'>Manufacturer: <b>Marcedez-Benz</b></span>
            <span className='singlePostYear'>Year: <b>2023</b></span>
         </div>
         <p className='singlePostDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dignissimos quae temporibus itaque quos sit consequatur fuga impedit perferendis sapiente rem voluptates adipisci assumenda, architecto, laudantium quidem maxime iure nostrum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dignissimos quae temporibus itaque quos sit consequatur fuga impedit perferendis sapiente rem voluptates adipisci assumenda, architecto, laudantium quidem maxime iure nostrum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dignissimos quae temporibus itaque quos sit consequatur fuga impedit perferendis sapiente rem voluptates adipisci assumenda, architecto, laudantium quidem maxime iure nostrum.Lorem ipsum dolor sit amet consecteLorem ipsum dolor sit amet consectetur adipisicing elit. Provident dignissimos quae temporibus itaque quos sit consequatur fuga impedit perferendis sapiente rem voluptates adipisci assumenda, architecto, laudantium quidem maxime iure nostrum.</p>
      </div>
    </div>
  )

}
