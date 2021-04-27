import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

const books = [
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg',
    author: 'alex banks',
    title:
      'Learning React: Modern Patterns for Developing React Apps 2nd Edition',
  },

  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg',
    title:
      'JavaScript: The Definitive Guide: Master the Worlds Most-Used Programming Language 7th Edition',
    author: 'david flanagan',
  },
];

function BookList() {
  return (
    <section className='bookList'>
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className='cardBook'>
      <img src={img}></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));

/*
PROP List

Disini kita menggunakan array map,
dan tuk return nya kita mengembalikan component <Book/> dengan propsnya adalah book dari map
dan dalam component Book destructuringnya adalah merujuk pada props.book target dari map sblumnya.


*/
