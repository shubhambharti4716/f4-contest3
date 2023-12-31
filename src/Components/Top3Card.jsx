import React from "react";
import "../Styles/Top3Card.css"; // Import the CSS file

const Top3Card = ({ bgColor, poster, Title, Description, goTo }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <div className="left-image">
        <img src={poster} alt="book_img" className="book-image" />
      </div>
      <div className="right-content">
        <div className="title">{Title}</div>
        <div className="description">{Description}</div>
        <a href={goTo} target="_blank" rel="noreferrer">
          <button className="button">Now Read</button>
        </a>
      </div>
    </div>
  );
};

export default Top3Card;
