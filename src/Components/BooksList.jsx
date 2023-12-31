import React, { useContext } from 'react';
import BooksContext from './BooksContext';
import { nanoid } from 'nanoid';
import '../Styles/BookList.css';

const BooksList = ({ setIsTopThreeVisible, setClickedPosterID }) => {
  const data = useContext(BooksContext);

  const bookImageStyle = {
    width: '16rem', // Adjust as needed
    height: '19rem',
    padding: '1.25rem', // Adjust as needed
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  };

  const handlePosterClick = (e) => {
    setIsTopThreeVisible(false);
    setClickedPosterID(e.target.id);
  };

  return (
    data && (
      <div className="booklist-wrapper">
        <h1 className="title">More Books</h1>
        <div className="flex-wrap">
          {data.map((singleData) => (
            <img
              id={singleData?.id}
              key={nanoid()}
              src={singleData?.volumeInfo?.imageLinks?.thumbnail}
              style={bookImageStyle}
              alt="Book"
              onClick={handlePosterClick}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default BooksList;
