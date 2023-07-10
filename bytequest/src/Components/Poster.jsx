import React from 'react';
import '../index.css'; // Import your CSS file if defined externally

const Poster = () => {
  return (
    <div className="container"> {/* Apply the container CSS class or inline styles */}
      <img className="image" src="../../public/Poster.png"  alt ="Poster"/> {}
      <p className="description"> 
      Discovering the story of behind the invention is a shared pleasure between all engineering student, and computer science history hides many of these tales, in Byte Quest you will be exploring them !
      </p> {}
    </div>
  );
};

export default Poster;