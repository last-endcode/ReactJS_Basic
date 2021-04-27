import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

const firstBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg',
  author: 'alex banks',
  title:
    'Learning React: Modern Patterns for Developing React Apps 2nd Edition',
};

const secondBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg',
  title:
    'JavaScript: The Definitive Guide: Master the Worlds Most-Used Programming Language 7th Edition',
  author: 'david flanagan',
};
function BookList() {
  return (
    <section className='bookList'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

// option -2 you can declare inside function use {}
const Book = ({ img, title, author }) => {
  // option -1
  // const { img, title, author } = props;
  return (
    <article className='cardBook'>
      {/* <img src={props.img}></img>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4> */}
      <img src={img}></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));

/*
PROPS
props disini dia berisi object {},dalam function kita bisa mengetikan argument props,
dan cek nya menggunakan console.log otomatis dia akan berisi object {}, dan jika kita membuat component 
dalam Book otomatis kita akan memiliki props dari book tsb.

Contoh:
   <Book title={title} />
   <Book />

Component Book pertama akan berisi object {title:'Learning React: Modern Patterns for Developing React Apps 2nd Edition'}, title tsb diperoleh dari variable yg dideklrasikan.
dan Component Book kedua tetap empty object {} karena tidak ada sama skli membuat props dalam component kedua.

Bisa juga kita membuat sndiri tanpa menggunakan variable, atau membuat string tersendiri.

<Book title={title} />
<Book hello='just random' />

Sekarang component ke dua berisi {hello: 'just random'}

Bahkan kita bisa membuat props berisi object juga seperti contoh diatas kita membuat obj : 
firstBook, and secondBook,
dan ketika kita menggunakan props kita bisa mengakses nya juga di component book tsb 
menggunakan props.propertygdibuat misal props.img atau mengggunakan teknik destructuring yg mudah digunakan seperti:

const { img, title, author } = props;
atau langsung membuatnya didalam function menggunakan {} menjadi => {img, title, author}
*/
