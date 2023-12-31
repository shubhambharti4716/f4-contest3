import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import TopThree from "./TopThree";
import OneMovie from "./OneMovie";
import BooksList from "./BooksList";
import BooksContextProvider from "./BooksContextProvider";

function Homepage() {
  const [isTopThreeVisible, setIsTopThreeVisible] = useState(true);
  const [clickedPosterID, setClickedPosterID] = useState(null);
  const [searchedTerm, setSearchedTerm] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const harryPotterResponse = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
        );
        const sherlockHolmesResponse = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=sherlock+holmes"
        );

        const harryPotterBooks =
          harryPotterResponse.data.items || [];
        const sherlockHolmesBooks =
          sherlockHolmesResponse.data.items || [];

        // on load combined books data of harry potter & sherlock holmes
        const initialBooks = [
          ...harryPotterBooks,
          ...sherlockHolmesBooks,
        ];
        setBooks(initialBooks);
        console.log("combined data", initialBooks);
      } catch (error) {
        console.log("Error fetching initial data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <BooksContextProvider searchedTerm={searchedTerm}>
      {/* Navbar component */}
      <Navbar
        setSearchedTerm={setSearchedTerm}
        setIsTopThreeVisible={setIsTopThreeVisible}
      />
      {/* Conditionally render TopThree or OneMovie based on isTopThreeVisible */}
      {isTopThreeVisible ? (
        <TopThree books={books} />
      ) : (
        <OneMovie clickedPosterID={clickedPosterID} />
      )}
      {/* BooksList component */}
      <BooksList
        setIsTopThreeVisible={setIsTopThreeVisible}
        setClickedPosterID={setClickedPosterID}
      />
    </BooksContextProvider>
  );
}

export default Homepage;
