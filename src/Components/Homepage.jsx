// Homepage.js
import React, { useEffect, useState } from "react";
import "../Styles/Homepage.css";
import DownArrow from "../Assets/Arrow 1.svg";
import profilePic from "../Assets/IMG20210528181544.png";
import TextLogo from "../Assets/KeazoNBOOKS text.svg";
import HeartLogo from "../Assets/bx_bx-book-heart.svg";
import PremiumIcon from "../Assets/fluent_premium-person-20-regular.svg";
import Notification from "../Assets/ic_round-notifications-none.svg";
import Logo from "../Assets/logo.svg";
import SearchIcon from "../Assets/ant-design_search-outlined.svg";
import axios from "axios";

function Homepage() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  // const [bookImages, setBookImages] = useState([]);

  // it will run once when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const harryPotterResponse = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
        );
        const sherlockHolmesResponse = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=sherlock+holmes"
        );
        console.log(harryPotterResponse, sherlockHolmesResponse);

        const harryPotterBooks = harryPotterResponse.data.items || [];
        const sherlockHolmesBooks = sherlockHolmesResponse.data.items || [];

        // on load combined books data of harry potter & sherlock holmes
        const initialBooks = [...harryPotterBooks, ...sherlockHolmesBooks];
        setBooks(initialBooks);
        console.log("combined data", initialBooks);
      } catch (error) {
        console.log("Error fetching initial data:", error);
      }
    };
    fetchData();
  }, []);

  async function implementSearch(e) {
    e.preventDefault();

    if (query.trim() === "") {
      return;
    }

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );

      const searchResults = response.data.items || [];
      setBooks(searchResults);
      console.log("searched books", books);
    } catch (error) {
      console.log("Error fetching search results:", error);
    }
  }

  return (
    <div className="main">
      <div className="navbar">
        <div className="logo-div">
          <img src={Logo} alt="Logo" />
          <img src={TextLogo} alt="Text Logo" />
        </div>
        <form className="search-form">
          <div>
            <img src={SearchIcon} alt="Search Icon" />
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
            />
          </div>
          <button onClick={implementSearch}>Search</button>
        </form>
        <div className="icons-div">
          <img src={HeartLogo} alt="Heart Logo" />
          <img src={Notification} alt="Notification Icon" />
          <img src={PremiumIcon} alt="Premium Icon" />
          <div className="profile">
            <img src={profilePic} alt="Profile Pic" />
            <img src={DownArrow} className="down-arrow" alt="Down Arrow" />
          </div>
        </div>
      </div>
      <div className="body">
        <div className="top-books">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="more-books">
          <h1>More Books</h1>
          <div className="all-books">
            {books.map((book) => (
              <div key={book.id} className="book-item">
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail || ''}
                  alt={book.volumeInfo.title}
                  className="book-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
