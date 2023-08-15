import React from 'react';
import '../index.css'; // Import your CSS file if defined externally
import imagePoster from "../Images/Poster.png";
import BlackButton from "./Button"

const Poster = () => {
  let teaserUrl ='https://www.youtube.com/watch?v=0yN99XffJ0Y';
  return (
    <div className="container"> {/* Apply the container CSS class or inline styles */}
       <h1 className='title'>Byte Quest</h1>

      <img className="image" src={imagePoster}  alt ="Poster"/> {}
      <p className="description"> 
      Discovering the story of behind the invention is a shared pleasure between all engineering student, and computer science history hides many of these tales, in Byte Quest you will be exploring them !
      </p> 
{/*       <BlackButton url="https://www.youtube.com/watch?v=0yN99XffJ0Y" text="Watch the teaser"/> */}
      <iframe
        width="560" // Adjust the width as needed
        height="315" // Adjust the height as needed
        src={teaserUrl}
        title="Teaser"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <BlackButton url="https://github.com/ibrahim-aboud/GDG-Game-Jam-ELFARI9" text="Check The Repo"/>
      <BlackButton url="https://ilyes-ar.itch.io/byte-quest" text="Play online !"/>
    </div>
  );
};

export default Poster;
