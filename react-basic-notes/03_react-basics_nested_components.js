import React from 'react';
import ReactDOM from 'react-dom';

function SayHi() {
  return (
    <>
      <Person />
      <Message />
    </>
  );
}

// create more component
const Person = () => <h2>WIRA WARDHANA</h2>;
const Message = () => {
  return <p>Jl. lurus yang benar dan tidak menyimpang nomor 0</p>;
};

ReactDOM.render(<SayHi />, document.getElementById('root'));

/*
Nested components
Disini kita membuat lebih banyak component, dan 
Render utama tetap pada <SayHi/> 
hanya saja SayHi dia memiliki 2 component yang telah kita buat yaitu Person, dan Message
*/
