import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

function BookList() {
  return (
    <section className='bookList'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='cardBook'>
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
const Author = () => (
  <h4
    style={{
      color: 'red',
      textTransform: 'uppercase',
      letterSpacing: '0.25rem',
    }}
  >
    by Alex Banks
  </h4>
);

ReactDOM.render(<BookList />, document.getElementById('root'));

/*
Disini kita bisa menggunakan CSS
dengan menempatkan import './filename' ./ adalah file folder yg sama

Atau bisa juga menggunakan Inline CSS pada JSX
seperti dalam class Author menggunakan style={{}}

*/
