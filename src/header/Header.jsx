import React from 'react';
import "./Header.css";
import img from "./logo.jpg";

export default function Header() {
  return (
    <div className='header'>
     <div className="headerTitles">
        <span className='headerTitlesm'>React & Node</span>
        <span className='headerTitleLg'><span className='dan'>Daniel</span> CarRentals</span>
     </div>
     <img  className='headerImg' src={img} alt="" />
    </div>
  );
}
