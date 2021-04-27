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
  // function reference
  const handlerClick = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };

  const complexBtn = (author) => {
    console.log(author);
  };

  // for mouseOver
  const HandlerMouse = (title) => {
    console.log(title);
  };
  return (
    <article className='cardBook' onMouseOver={() => HandlerMouse(title)}>
      <img src={img}></img>
      <h4 style={{ marginTop: '1rem', textTransform: 'capitalize' }}>
        {author}
      </h4>
      {/* inline function */}
      <h1 onMouseOver={() => console.log(title)}>{title}</h1>
      <button type='button' onClick={handlerClick}>
        Clik Here
      </button>
      <button type='button' onClick={() => complexBtn(author)}>
        Complex Button
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));

/*
Event handler onClick, onMouseOver
Inline function :
 <h1 onMouseOver={() => console.log(title)}>{title}</h1>


**************
Function by reference:
 const handlerClick = () => {
    alert('hello world');
  };

 <button type='button' onClick={handlerClick}>
  Clik Here
 </button>

 **************
 Function with argument :
 
 const complexBtn = (author) => {
    console.log(author);
  };

//() => mnggunakan tanda kurung agar bisa diklik hanya author saja.
 <button type='button' onClick={() => complexBtn(author)}>
        Complex Button
</button>


************
onMouseOver

const HandlerMouse = (title) => {
    console.log(title);
};

<article className='cardBook' onMouseOver={() => HandlerMouse(title)}>


************
e = for class and bunch ton event 
result example : class etc.....
e.target for target attribute now.
result example : <button type="button">Clik Here</button>

*/
