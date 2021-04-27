import React from 'react';
import ReactDOM from 'react-dom';
import { books } from './data';
import SpecifiedBook from './component/Book';

// CSS
import './index.css';

function BookList() {
  return (
    <>
      <h2
        style={{
          textAlign: 'center',
          padding: '2rem 0',
          textTransform: 'capitalize',
        }}
      >
        amazon store javascript best seller
      </h2>
      <section className='bookList'>
        {books.map((book, index) => {
          return <SpecifiedBook {...book} key={index} />;
        })}
      </section>
    </>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));

/*
import & export

export digunakan agar file tsb bisa digunakan di file lain dengan menggunakan import
import digunakan agar file export yg sblumnya dalam file lain bisa digunakan di file saat ini.

export nama file harus match dengan file export misal :
export const john 

otomatis ketika di import harus john seprti ini :
import {john} from 'lokasifile'

Jika file import dengan export default book component penamaan nama file bebas
import SpecifiedBook from 'lokasifile'

*/
