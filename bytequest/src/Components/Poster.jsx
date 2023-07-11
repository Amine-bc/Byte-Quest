import React from 'react';
import '../index.css'; // Import your CSS file if defined externally
import imagePoster from "../Images/Poster.png";
import BlackButton from "./Button"

const Poster = () => {
  return (
    <div className="container"> {/* Apply the container CSS class or inline styles */}
       <h1 className='title'>Byte Quest</h1>

      <img className="image" src={imagePoster}  alt ="Poster"/> {}
      <p className="description"> 
      Discovering the story of behind the invention is a shared pleasure between all engineering student, and computer science history hides many of these tales, in Byte Quest you will be exploring them !
      </p> 
      <BlackButton url="https://github.com/ibrahim-aboud/GDG-Game-Jam-ELFARI9" text="Check The Repo"/>
      <BlackButton url="https://ilyes-ar.itch.io/byte-quest" text="play"/>
    </div>
  );
};

export default Poster;
