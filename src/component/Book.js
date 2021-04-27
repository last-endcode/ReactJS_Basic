import React from 'react';

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

export default Book;
