import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/OneMovie.css"; // Import the CSS file

const OneMovie = ({ clickedPosterID }) => {
  const [data, setData] = useState(null);

  async function fetchPosterData(clickedPosterID) {
    const API_KEY = "AIzaSyDYiV954fqlqsVcj4t0gLr_bgta7x-ZJuE";
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${clickedPosterID}?key=${API_KEY}`
    );
    console.log(res.data.volumeInfo.imageLinks.thumbnail);
    setData(res.data.volumeInfo);
  }

  useEffect(() => {
    fetchPosterData(clickedPosterID);
  }, [clickedPosterID]);

  // Function to truncate the description to a maximum of 100 words
  const truncateDescription = (description, maxWords) => {
    if (typeof description !== "string") {
      return ""; // Handle cases where description is not a string
    }
    const words = description.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return description;
  };

  return (
    data && (
      <div className="container">
        <div className="poster-container">
          <div className="left1">
            <img
              src={data.imageLinks.thumbnail}
              alt="poster img"
              className="poster"
            />
          </div>
          <div className="right1">
            <div className="title">{data.title}</div>
            {data.authors.map((author, index) => (
              <span key={index} className="author">
                {author}
              </span>
            ))}
            <div className="description">
              {truncateDescription(data.description, 50)}
            </div>
            <div className="more-info">
              <div className="avg-rating">Avg Rating: {data.averageRating}</div>
              <div className="rating-count">
                Rating Count: {data.ratingsCount}
              </div>
              <div className="publisher">Publisher: {data.publisher}</div>
              <div className="language">Language: {data.language}</div>
            </div>
            <div className="buttons">
              <a href={data.previewLink} target="_blank" rel="noreferrer">
                <button>Now Read</button>
              </a>
              <a href={data.infoLink} target="_blank" rel="noreferrer">
                <button>More info</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default OneMovie;
