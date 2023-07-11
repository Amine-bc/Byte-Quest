import React from 'react';

function BlackButton(props) {
  return (
<button className="black-button" onClick={() => window.location.href = {props.url}>
  {props.text}
</button>
  
  );
}

export default BlackButton;
