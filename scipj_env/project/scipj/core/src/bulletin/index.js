import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../../core/src/components/Navbar';


function Content() {
  const listitems = bulletins.map((subarray) =>
    <ul>
      <li>{ subarray[0] }</li>
      <li>{ subarray[1] }</li>
      <li>{ subarray[2] }</li>
      <li>{ subarray[3] }</li>
      <li>{ subarray[4] }</li>
    </ul>
  );
  return (
    <div>{ listitems }</div>
  );
}

ReactDOM.render(<Content/>, document.querySelector('#content'));
