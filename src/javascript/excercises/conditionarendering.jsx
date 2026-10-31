import React from 'react';

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function App() {
    
    const [warning, setWarning] = React.useState(false);
    let warningContent = <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick ={handleClick}>Proceed</button>
        </div>
    function handleClick()
    {
        warning ? setWarning(false) : setWarning(true)
    }
    return (
      <div>
         {warning ? warningContent: null}
        <button onClick = {handleClick}>Delete</button>
      </div>    
    );
}