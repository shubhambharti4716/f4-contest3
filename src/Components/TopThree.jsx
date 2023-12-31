// TopThree.js
import React, { useContext } from "react";
import Top3Card from "./Top3Card";
import BooksContext from "./BooksContext";
import "../Styles/TopThree.css"; // Import the CSS file

const TopThree = () => {
  const data = useContext(BooksContext);

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
      <div className="top-three-container">
        <Top3Card
          className="top3-card1"
          bgColor="rgba(113, 197, 244, 0.38)"
          poster={data[0]?.volumeInfo?.imageLinks?.thumbnail}
          Title={data[0]?.volumeInfo.title}
          Description={truncateDescription(data[0]?.volumeInfo.description, 50)}
          goTo={data[0]?.volumeInfo.infoLink}
        />
        <Top3Card
          className="top3-card2"
          bgColor="rgba(171, 113, 244, 0.38)"
          poster={data[1]?.volumeInfo?.imageLinks?.thumbnail}
          Title={data[1]?.volumeInfo.title}
          Description={truncateDescription(data[1]?.volumeInfo.description, 50)}
          goTo={data[1]?.volumeInfo.infoLink}
        />
        <Top3Card
          className="top3-card3"
          bgColor="rgba(244, 113, 168, 0.38)"
          poster={data[2]?.volumeInfo?.imageLinks?.thumbnail}
          Title={data[2]?.volumeInfo.title}
          Description={truncateDescription(data[2]?.volumeInfo.description, 50)}
          goTo={data[2]?.volumeInfo.infoLink}
        />
      </div>
    )
  );
};

export default TopThree;
