import React from 'react';
import "./Sidebar.css";
import DANIEL from "./Daniel.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={DANIEL} className='tx' />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis animi dolorem magnam quam reiciendis sint eos, adipisci, illum saepe quo tenetur ut corporis voluptas odio laudantium! Non nesciunt esse aut!</p>
        
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Benz</li>
            <li className="sidebarListItem">BMW</li>
            <li className="sidebarListItem">Volvo</li>
            <li className="sidebarListItem">Toyota</li>
            <li className="sidebarListItem">Hyndai</li>
            <li className="sidebarListItem">HOWO</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <FaFacebook className='sidebarIcon' />
      <FaSquareXTwitter className='sidebarIcon'/>
      <FaPinterest className='sidebarIcon'/>
      <AiFillInstagram className='sidebarIcon' />
        </div>
      </div>
    </div>
  );
}
