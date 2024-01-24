import React from 'react';
import "./Write.css";
import { IoMdAddCircle } from "react-icons/io";
import Img from "./post.jpg";


export default function Write() {
  return (
    <div className='write'>
        <img src={Img} className="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput"><IoMdAddCircle className='writeIcon'/>
</label>
            <input type="file" id='fileInput' style={{display:'none'}} />
            <input type="text" placeholder='Subject' className='writeInput' autoFocus={true} />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder='Comment' type='text' className='writeInput writeText'></textarea>
        </div>
        <button className="writeSubmit">Send</button>
      </form>
    </div>
  );
}
