import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../../core/src/components/Navbar';


function Content() {
  return (
    <h1>Hello, world!</h1>
  )
}

ReactDOM.render(<Content/>, document.querySelector('#content'));
