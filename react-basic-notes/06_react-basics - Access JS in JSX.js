import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

function BookList() {
  return (
    <section className='bookList'>
      <Book />
    </section>
  );
}

const author = 'alex banks';

const Book = () => {
  const title =
    '    Learning React: Modern Patterns for Developing React Apps 2nd Edition';
  return (
    <article className='cardBook'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg'
        alt='pic'
      ></img>
      {/* use jsx in JS */}
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>$ {750.0 + 200.0}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));

/*
JSX in JavaScript
Here, we can access JS in JSX
like title <h1>{title}</h1>
But for declare variable like this: 
<p>{let i=0}</p>
will error 
*/
