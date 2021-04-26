import React from 'react';
import ReactDOM from 'react-dom';

function SayHi() {
  return (
    <div className="container">
      <h2>hello wiwa</h2>
      <ul>
        ini adalah resep nasi goreng
        <li>nasi</li>
        <li>telor</li>
        <li>bumbu racik</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<SayHi />, document.getElementById('root'));

/*
JSX rules:
should be wrapped use fragment <></>, div, section, or article
return single element,
use className not class
use camel case for attribute HTML like onClick, etc
*/
