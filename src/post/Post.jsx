import React, { useState } from 'react';
import "./Post.css";
// import Details from '../Details/Details';
import Img from "./brabus.jpg";
import ALTIS from "./Altis.png";
import AUDI from "./AUDI.jpg";
// import "../Details/Details.css"



export default function Post() {

  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "Brabus G-Wargon",
      image:Img,
      Description:"PostDes"


    },
    {
      id: "2",
      title: "TOYOTA Altis",
      image:ALTIS,
      Description:"PostDes"


    },
    {
      id: "3",
      title: "AUDI",
      image:AUDI,
      Description:"PostDes"


    },

  ]);
  
  return (
   
    <div className="posts">
      {
        posts.map((item, index) => {
          return (
            <div className='post'>
     <img src={item.image} className='postImg' />
     <div className="postInfo">
        <div className="postCats">
            <span className="postCat">{item.title}</span>
            
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet, consectetur adipisicin.</span>
        <hr />
        <span className="postDate">1hr ago</span>

     </div>
     <p className='postDes'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat provident in ullam aut, a vel inventore ipsum maxime odio ad quos officia explicabo soluta dicta nam cum libero ea atque.
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam perferendis dignissimos, suscipit eligendi dolor necessitatibus molestias sed unde earum rerum aliquam animi eos hic pariatur esse, voluptatibus debitis natus.</p>
    </div>
          )
        })
      }

    </div>
    
  );
}
