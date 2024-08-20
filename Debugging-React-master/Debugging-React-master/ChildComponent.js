// ChildComponent.js

import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Received Count from Parent: {props.count}</p>
    </div>
  );
}

export default ChildComponent;
