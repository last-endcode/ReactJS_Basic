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
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus laborum esse obcaecati qui maiores aut eaque eius
          omnis, quis officiis amet! Consequatur placeat cum assumenda a
          quisquam reprehenderit iusto excepturi?
        </p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  return (
    <article className='cardBook'>
      <img src={img}></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p style={{ marginTop: '0.5rem' }}>{children}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));

/*
PROPS Children

Dibuat antara open tag dan close tag pada component, 
dan jika kita membuat paragraf lorem diantara tsb tidak akan tampil dan perlu 
menuliskan children agar bisa dirender (tampilkan).



*/
