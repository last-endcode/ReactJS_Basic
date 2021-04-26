import React from 'react';
import ReactDOM from 'react-dom';

function SayHi() {
  return <h3>Hello Wira Wardhana, how are u?</h3>;
}

ReactDOM.render(<SayHi />, document.getElementById('root'));

/*
Note for me:
Dalam react function akan menjadi component tuk penulisan function harus capitalize, 
dan dalam component tsb harus return html atau biasa disebut sebagai JSX. 
dan render tsb adalah untuk menampilkan didalam browser dan selalu ingat,
setiap menggunakan component yg akan dimasukan kedalam render,
kamu harus selalu menggunakan tanda kurung tutup.
*/
