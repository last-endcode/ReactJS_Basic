import React from 'react';
import ReactDOM from 'react-dom';

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src='https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg'
      alt='pic'
    ></img>
  );
};

const Title = () => (
  <h1>Learning React: Modern Patterns for Developing React Apps 2nd Edition</h1>
);
const Author = () => <h4>by Alex Banks</h4>;

ReactDOM.render(<BookList />, document.getElementById('root'));

/*
Disini kita membuat component utama bernama BookList, 
dan dalam <section></section> BookList dia memiliki 
<article></article> Book, dan Book terdiri atas beberapa component
diantranya component Image,Title, dan Author.

Jika kita menambah <Book/> 5 atau 4 otomatis
Akan menampilkan 5 Book / 4 Book Article dengan judul yg sama, karena kita 
menggunakan komponen yg sama
*/
