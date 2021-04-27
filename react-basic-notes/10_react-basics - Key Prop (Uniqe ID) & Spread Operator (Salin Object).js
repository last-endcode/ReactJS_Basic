import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

const books = [
  {
    id: 1,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg',
    author: 'alex banks',
    title:
      'Learning React: Modern Patterns for Developing React Apps 2nd Edition',
  },
  {
    id: 2,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg',
    title:
      'JavaScript: The Definitive Guide: Master the Worlds Most-Used Programming Language 7th Edition',
    author: 'david flanagan',
  },
  {
    id: 3,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/41AJiI9AyyL._SX384_BO1,204,203,200_.jpg',
    title:
      'The Road to React: Your journey to master plain yet pragmatic React.js',
    author: 'Robin Wieruch',
  },
];

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
          return <Book {...book} key={index} />;
        })}
      </section>
    </>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className='cardBook'>
      <img src={img}></img>
      <h4 style={{ marginTop: '1rem', textTransform: 'capitalize' }}>
        {author}
      </h4>
      <h1>{title}</h1>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));

/*
Key Props, & Spread Operator

Untuk menggunakan key props bisa menambahkan id dalam object, atau index
didalam array map, key props adalah agar memiliki id unik

Dan disebelumnya kita membuat property yang book={book} seperti ini,
lalu dalam functionnya menggunakan props.book

    <section className='bookList'>
      {books.map((book, index) => {
        return <Book book={book} key={index} />;
      })}
    </section>

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

Dan cara tersimple adalah menggunakan spread operator,yaitu teknik dimana kmu bisa menyalin 
semua yang berada dalam object array {...objnya}

   <section className='bookList'>
      {books.map((book, index) => {
        return <Book {...book} key={index} />;
      })}
    </section>


Dan tuk yg berada dalam obj nya agar bisa diakses disimpan dalam function nya {}
const Book = ({img, title,author}) => {
    return (
    <article className='cardBook'>
      <img src={img}></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
*/
