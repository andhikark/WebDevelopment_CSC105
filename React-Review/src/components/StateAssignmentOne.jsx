import React, { useState } from 'react';

function StateAssignmentOne () {
  const[count,setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
      <div>
        <button onClick={handleClick}>{count}</button>
      </div> 
  );
}

export default StateAssignmentOne;
