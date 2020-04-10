import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../../core/src/components/Navbar';


function Content() {
  const listitems = bulletins.map((subarray) =>
    <div>
      <h1>Heading</h1>
      subarray.map((item) =>
        <p>{item}</p>
      )
    </div>
  );
  return (
    <div>{ listitems }</div>
  );
}

ReactDOM.render(<Content/>, document.querySelector('#content'));
